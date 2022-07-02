import { React, useRef, useState, useEffect } from 'react';
import fs from 'fs/promises';
import path from 'path';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import AllWallets from '../../components/walletComponents/all-wallets';


function WalletIndex(props) {
  const [chosenName, setChosenName] = useState(props.wallets[0]);
  const [chosenWallet, setChosenWallet] = useState(props.wallets[0].walletAddress)


  async function showWalletHandler() {
    setChosenWallet(chosenName.walletAddress)
  }

  function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
  
  return (
    <Fragment>
      <header>
        {/* Wallet drop-down and buttons */}
        <div className="container flex flex-wrap m-5">
          <form onSubmit={showWalletHandler}>
            <select
              className="bg-btn-blue border-2 border-white"
              id="name"
              key={props.wallets.id}
              value={chosenName.name}
              onChange={(event)=> setChosenName(props.wallets.find(whale=> whale.name == event.target.value) )}
            >
            {props.wallets.sort(GetSortOrder("name")).map((whale)=> {
              return(
                <option key={whale.name} value={whale.name}>{whale.name}</option>
              )
            })}
               
        
            </select>
          </form>

          <div>
            <Button onClick={showWalletHandler} children="Show" />
          </div>
        </div>
      </header>
      <div className="m-5 border-2 border-red-600">
        <AllWallets
        chosenWallet = {chosenWallet}
         />
      </div>
      </Fragment>
  );
}

export async function getStaticProps() {
const walletFilePath = path.join(process.cwd(), 'data', 'wallets.JSON');
const walletDataJSON = await fs.readFile(walletFilePath);
const walletData = JSON.parse(walletDataJSON);

  if (!walletData) {
    return {
      redirect: {
        destination:'/no-data'
      }
    }
  }

  if (walletData.whaleWallets.length==0) {
    return {notFound: true };
  }

return {props: {
  wallets: walletData.whaleWallets
}}

}
export default WalletIndex;