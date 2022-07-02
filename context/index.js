import { useState, useEffect, useReducer, createContext, useContext } from "react";
import Moralis from "moralis";
import {
  useChain,
  useMoralis,
  useMoralisQuery,
  useWeb3Contract,
  useMoralisSubscription,
} from "react-moralis";

import { useNotification } from "web3uikit";

const CustomMoralisContext = createContext();

export function MoralisContextProvider({ children }) {
  const {
    isInitialized,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    user,
    logout,
    authenticate,
    Moralis,
    account,
  } = useMoralis();
  const { chainId } = useChain();
  const dispatch = useNotification();
  const { runContractFunction } = useWeb3Contract();
  
  
//   const Query = useMoralisQuery("BuyMeCoffee", (query) => query, [], {
//     autoFetch: true,
//     live: true,
//   });

  let sharedState = {
    //contractAddress,
    //supportedChain,
    isInitialized,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    user,
    logout,
    authenticate,
    Moralis,
    account,
    chainId,
    runContractFunction,
    dispatch,
    useMoralisSubscription,
  };

  return (
    <CustomMoralisContext.Provider value={sharedState}>
      {children}
    </CustomMoralisContext.Provider>
  );
}

export function useCustomMoralisContext() {
  return useContext(CustomMoralisContext);
}

export default CustomMoralisContext;