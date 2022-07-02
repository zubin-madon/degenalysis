import React, {
    useEffect,
    useMemo,
    useState,
    Component,
    useCallback,
  } from "react";
  import { useGlobalFilter, useSortBy, useTable } from "react-table";
  import { useCustomMoralisContext } from "../../context";
  import Moralis from "moralis";
  import { useMoralisQuery, useMoralisSubscription } from "react-moralis";
  import { Fragment } from "react";
  
  function AllEthTransactions(props) {
    const [finalData, setFinalData] = useState([]);
  
    //const moralisCtx = useCustomMoralisContext();
    const { fetch } = useMoralisQuery(
      "EthTransactions",
      (query) =>
        query.equalTo("from_address", props.chosenWallet).descending("block_number").limit(5),
      [props.chosenWallet],
      {
        autoFetch: true,
      live: true }
    );
  
  
    const queryEthTokenTransfers = async () => {
      
   
      const results = await fetch();
      console.log(results)
      results.map((each) =>{
      
        setFinalData((prevData) => [...prevData,
          {
            from_address: each.attributes.from_address,
            to_address: each.attributes.to_address,
            transaction_hash: each.attributes.hash,
            block_number: each.attributes.block_number,
        
          },
        ])
        console.log(finalData)
      }
      );
    };
  
    function clearData() {
      setFinalData([])
    }
  
    useEffect(()=> {
      
      clearData()
      queryEthTokenTransfers()
    }, [props.chosenWallet])
  
    const columns = useMemo(
      () => [
        {
          Header: "From",
          accessor: "from_address",
        },
        {
          Header: "To",
          accessor: "to_address",
        },
        {
          Header: "Txn Hash",
          accessor: "hash",
        },
        {
          Header: "Block",
          accessor: "block_number",
        },
   
      ],
      []
    );
  
  
    const tableInstance = useTable({ columns: columns, data: finalData });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;
  
    return (
      <Fragment>
        <table
          className="border-separate table-auto border-2"
          {...getTableProps()}
        >
          <thead className="m-5 p-5">
            {headerGroups.map((headerGroup) => (
              <tr key={finalData.transaction_hash} className="border-2" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="m-5 p-5" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="p-5 m-5" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
  
              return (
                <tr className="m-5 p-5">
                  {row.cells.map((cell, idx) => (
                    <td className="p-5 m-5" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="">
         
        </div>
      </Fragment>
    );
  }
  
  export default AllEthTransactions;
  