import EthTokenTransfers from "./eth-token-transfers";
import AllEthTransactions from "./all-eth-transactions";
import AllAvaxTransactions from "./all-avax-transactions";
import { useState, useEffect } from "react";
import { useCustomMoralisContext } from "../../context";
import Moralis from "moralis";
import { Fragment } from "react";

function AllWallets(props) {
  const moralisCtx = useCustomMoralisContext();
  const chosenWallet = props.chosenWallet;
  const [currentItem, setCurrentItem] = useState("");
  const handleItemClick = (itemName) => {
    setCurrentItem(itemName);
  };

  return (
    <Fragment>
      <nav>
        <button
          className="bg-btn-blue p-1 m-1 rounded-sm hover:bg-purple-700"
          onClick={() => handleItemClick("EthTokenTransfers")}
        >
          ETH Token Transfers
        </button>
        <button
          className="bg-btn-blue p-1 m-1 rounded-sm hover:bg-purple-700"
          onClick={() => handleItemClick("AllEthTransactions")}
        >
          All ETH Txns
        </button>
        <button
          className="bg-btn-blue p-1 m-1 rounded-sm hover:bg-purple-700"
          onClick={() => handleItemClick("AllAvaxTransactions")}
        >
          All AVAX Txns
        </button>
        <button
          className="bg-btn-blue p-1 m-1 rounded-sm hover:bg-purple-700"
          onClick={() => handleItemClick("AllAvaxTransactions")}
        >
          ETH NFT Transfers
        </button>
        <button
          className="bg-btn-blue p-1 m-1 rounded-sm hover:bg-purple-700"
          onClick={() => handleItemClick("AllAvaxTransactions")}
        >
          AVAX NFT Transfers
        </button>
      </nav>
      {currentItem === "EthTokenTransfers" && (
        <EthTokenTransfers chosenWallet={chosenWallet} />
      )}
      {currentItem === "AllEthTransactions" && (
        <AllEthTransactions chosenWallet={chosenWallet} />
      )}
      {currentItem === "AllAvaxTransactions" && (
        <AllAvaxTransactions chosenWallet={chosenWallet} />
      )}
      
    </Fragment>
  );
}

export default AllWallets;
