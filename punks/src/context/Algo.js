/* global AlgoSigner */

import { apiConfig } from "src/config";
import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { IoMdGift } from "react-icons/io";
import { toast } from "react-toastify";
import {
  getAlgoClient,
  algodToken,
  algodServer,
  algodPort,
  managerAddr,
  networkType,
} from "src/constants/AlgoConstant";
import MyAlgoConnect from "@randlabs/myalgo-connect";

export const AlgoContext = createContext();

const setSession = (algoWalletAddress) => {
  if (algoWalletAddress) {
    sessionStorage.setItem("algoWalletAddress", algoWalletAddress);
  } else {
    sessionStorage.removeItem("algoWalletAddress");
  }
};

const setToken = (token) => {
  if (token) {
    sessionStorage.setItem("token", token);
  } else {
    sessionStorage.removeItem("token");
  }
};

const setwalletName = (walletName) => {
  if (walletName) {
    sessionStorage.setItem("walletName", walletName);
  } else {
    sessionStorage.removeItem("walletName");
  }
};

export default function AlgoProvider(props) {
  const myAlgoWallet = new MyAlgoConnect();

  const [account, setAccount] = useState("");
  const [transactionsParams, setTransactionsParams] = useState();
  const [accountList, setAccountList] = useState([]);
  const [myMintedNFt, setMyMintedNFt] = useState([]);
  const [userData, setuserData] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [peraWallet, setPeraWallet] = useState();

  const connectToWallet = (walletName) => {
    if (walletName == "MyAlgo") {
      connectToMyAlgo();
    }
    if (walletName == "AlgoSigner") {
      connectToAlgoSigner();
    }
    if (walletName == "PeraWallet") {
    }
  };

  const connectToMyAlgo = async () => {
    try {
      const accounts = await myAlgoWallet.connect();
      setwalletName("MyAlgo");
      if (accounts && accounts[0]?.address) {
        setAccount(accounts[0]);
        setAccountList(accounts);
      }
    } catch (err) {
      console.log("ERROR err", err.message);
      toast.error(err.message + ", Please try again");

      setwalletName("");
    }
  };

  const connectToAlgoSigner = async () => {
    try {
      if (checkAlgoSigner()) {
        await AlgoSigner.connect({
          ledger: networkType,
        });
        const accts = await AlgoSigner.accounts({
          ledger: networkType,
        });
        setwalletName("AlgoSigner");

        if (accts && accts[0]?.address) {
          setAccount(accts[0]);
          setAccountList(accts);
        }
      } else {
        toast.error("AlgoSigner is NOT installed.");
        setwalletName();
      }
    } catch (error) {
      setwalletName();

      toast.error(error.message);
    }
  };

  const getNetworkStatus = async () => {
    try {
      if (account) {
        const accts = await AlgoSigner.algod({
          ledger: networkType,
          path: "/v2/status",
        });
      } else {
        // toast.error("Connect your wallet");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getTransactionParams = async () => {
    try {
      if (account) {
        const params = await AlgoSigner.algod({
          ledger: networkType,
          path: "/v2/transactions/params",
        });
        setTransactionsParams(params);
      } else {
        // toast.error("Connect your wallet");
      }
    } catch (error) {
      console.log("error", error);
      //   toast.error(error.message);
    }
  };

  useEffect(() => {
    if (account) {
      //   getNetworkStatus();
      getTransactionParams();
    }
  }, [account]); //eslint-disable-line

  const checkAlgoSigner = useCallback(() => {
    if (typeof AlgoSigner !== "undefined") {
      return true;
    } else {
      return false;
    }
  }, []);

  const getAccountAssets = async () => {
    let creator = account;

    let algodClient = getAlgoClient(algodToken, algodServer, algodPort);

    let accountInfo = await algodClient
      .accountInformation(creator.address)
      .do();

    console.log("accountInfo", accountInfo);

    setMyMintedNFt(accountInfo["assets"]);
  };

  const connectWalletAPIHandler = async () => {
    try {
      const res = await axios.post(apiConfig.connectWallet, {
        walletAddress: account.address,
      });
      if (res.data.statusCode == 200) {
        setuserData(res.data.result);
        setToken(res.data.result.token);
        setIsAdmin(res.data.result.userType == "ADMIN");
      } else {
        setuserData();
        setToken(null);
        setIsAdmin(false);
      }
    } catch (error) {
      setuserData();
      setToken(null);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    if (account) {
      getAccountAssets();
      connectWalletAPIHandler();
    }
  }, [account]);

  let data = {
    connectToWallet: (walletName) => connectToWallet(walletName),
    account,

    transactionsParams,
    accountList,
    myMintedNFt,
    userData,
    isAdmin,
    peraWallet,
    setMyMintedNFt: (list) => setMyMintedNFt(list),
    setAccount: (account) => setAccount(account),
    getAccountAssets: () => getAccountAssets(),
    setAccountList: (list) => setAccountList(list),
    setPeraWallet: (details) => setPeraWallet(details),

    updateUser: (account) => {
      setSession(account);
    },
  };

  useEffect(() => {
    const walletName = sessionStorage.getItem("walletName");
    const algoWalletAddress = sessionStorage.getItem("algoWalletAddress");

    if (algoWalletAddress && walletName) {
      // connectToWallet(walletName);
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    if (account) {
      data.updateUser(account.address);
    }
  }, [account]); //eslint-disable-line

  return (
    <AlgoContext.Provider value={data}>{props.children}</AlgoContext.Provider>
  );
}
