import React, { createContext, useEffect, useState } from "react";
import { injected } from "src/connectors";
import { useWeb3React } from "@web3-react/core";
import { ACTIVE_NETWORK, CryptochipsContract } from "src/constants";
import {
  swichNetworkHandler,
  getWeb3ContractObject,
  getBalanceOf,
  getWeb3Obj,
  getContract,
} from "src/utils";
// import CryptoChipsABI from "src/ABI/CryptoChipsABI.json";
import axios from "axios";
export const UserContext = createContext();

const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem("userAddress", userAddress);
  } else {
    sessionStorage.removeItem("userAddress");
  }
};

export default function AuthProvider(props) {
  const { activate, chainId, library, account } = useWeb3React();
  const [MAX_NFT_SUPPLY, setMAX_NFT_SUPPLY] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [balanceOfValue, setBalanceOfValue] = useState(0);
  const [adminWalletAddress, setAdminWalletAddress] = useState("");
  const [nftPrice, setNftPrice] = useState(0);
  const [userNFTList, setUserNFTList] = useState([]);
  const [saleIsActive, setSaleIsActive] = useState(false);
  let data = {
    balanceOfValue,
    MAX_NFT_SUPPLY,
    totalSupply,
    adminWalletAddress,
    nftPrice,
    userNFTList,
    saleIsActive,
    updateUser: (account) => {
      setSession(account);
    },
    connectWallet: () => {
      activate(injected, undefined, true).catch((error) => {
        if (error) {
          activate(injected);
        }
      });
    },
    // getCurrentMintingDetails: () => getCurrentMintingDetails(),
  };

  // const getCurrentMintingDetails = async () => {
  //   const contractObj = await getWeb3ContractObject(
  //     CryptoChipsABI,
  //     CryptochipsContract
  //   );
  //   if (account) {
  //     getBalanceOfFun();
  //   }
  //   const saleIsActive = await contractObj.methods.saleIsActive().call();
  //   setSaleIsActive(saleIsActive);
  //   const MAX_NFT_SUPPLY = await contractObj.methods.MAX_NFT_SUPPLY().call();
  //   setMAX_NFT_SUPPLY(Number(MAX_NFT_SUPPLY));
  //   const totalSupply = await contractObj.methods.totalSupply().call();
  //   setTotalSupply(Number(totalSupply));
  //   console.log("contractObj", contractObj.methods);
  // };

  // const userNFTListHadler = async (balanceOf, cancelTokenSource) => {
  //   setUserNFTList([]);
  //   const contract = getContract(
  //     CryptochipsContract,
  //     CryptoChipsABI,
  //     library,
  //     account
  //   );

  //   try {
  //     for (let i = 0; i < balanceOf; i++) {
  //       const id = await contract.tokenOfOwnerByIndex(account, i);
  //       const filter = await contract.tokenURI(id.toString());

  //       const res = await axios.get(filter, {
  //         cancelToken: cancelTokenSource && cancelTokenSource.token,
  //       });
  //       if (res.status === 200) {
  //         setUserNFTList((prev) => [
  //           ...prev,
  //           { id: id.toString(), nfdData: res.data },
  //         ]);
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   const cancelTokenSource = axios.CancelToken.source();
  //   if (balanceOfValue > 0) {
  //     userNFTListHadler(balanceOfValue, cancelTokenSource);
  //   }
  //   return () => {
  //     cancelTokenSource.cancel();
  //   };
  // }, [balanceOfValue, account]); //eslint-disable-line

  // useEffect(() => {
  //   if (account) {
  //     getBalanceOfFun();
  //   }
  // }, [account]); //eslint-disable-line

  // async function getBalanceOfFun() {
  //   setBalanceOfValue(
  //     await getBalanceOf(CryptoChipsABI, CryptochipsContract, account)
  //   );
  // }

  // const getContractDetails = async () => {
  //   try {
  //     const web3 = await getWeb3Obj();
  //     const contractObj = await getWeb3ContractObject(
  //       CryptoChipsABI,
  //       CryptochipsContract
  //     );
  //     const adminAccount = await contractObj.methods.owner().call();
  //     setAdminWalletAddress(adminAccount);
  //     const NFT_PRICE = await contractObj.methods.getNFTPrice(1).call();
  //     const getNFTPrice = await web3.utils.fromWei(NFT_PRICE.toString());
  //     console.log("getNFTPrice", getNFTPrice);
  //     setNftPrice(getNFTPrice);
  //   } catch (error) {
  //     console.log("ERROR", error);
  //   }
  // };

  // useEffect(() => {
  //   // getCurrentMintingDetails();
  //   getContractDetails();
  // }, []);

  useEffect(() => {
    if (chainId) {
      if (chainId !== ACTIVE_NETWORK) {
        if (window.ethereum) {
          swichNetworkHandler();
        }
      }
    }
  }, [chainId, account]); //eslint-disable-line

  useEffect(() => {
    const userAddress = window.sessionStorage.getItem("userAddress");
    if (userAddress) {
      data.connectWallet();
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    data.updateUser(account);
  }, [account]); //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
