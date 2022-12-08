/* global AlgoSigner */
import React, { useContext, useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  OutlinedInput,
  FormControl,
  Slider,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import LazyLoad from "react-lazyload";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";
import { AlgoContext } from "src/context/Algo";
import algosdk from "algosdk";
import {
  algodToken,
  algodPort,
  algodServer,
  total,
  decimals,
  defaultFrozen,
  reserveAddr,
  assetMetadataHash,
  freezeAddr,
  clawbackAddr,
  managerAddr,
  getAlgoClient,
  adminWalletAddress,
  oneAlgodPrice,
  getNftPrice,
  startTime,
  whiteListStartTime,
  admin_mnemonic,
} from "src/constants/AlgoConstant";
import { toast } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import axios from "axios";
import { apiConfig } from "src/config/index.js";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundImage: "url(images/MintBackground.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: "115px 0px",
    position: "relative",
    backgroundColor: "#000000",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100%",
    // zIndex: " 99",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "100px 0px 60px",
    },
    "& .headingbox": {
      padding: "25px 0px",
      "& h1": {
        color: "#FFFFFF",
      },
    },
  },
  quantity: {
    maxWidth: "100%",
    display: "flex",
    height: "52px",
    border: "1px solid #52565c",
    borderRadius: "5px",
    color: "#fff !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    alignItems: "center",
    justifyContent: "space-between",
    "& button": {
      fontSize: "20px",
      color: "#fff",
      "&:first-child": {
        color: "#ffffff",
      },
      "&:last-child": {
        color: "#ffffff",
      },
    },
    "& input": {
      textAlign: "center",
      backgroundColor: "transparent",
      color: "#fff",
      border: "none",
      fontSize: "25px",
      fontWeight: "900",
      width: "30%",
      "&:focus-visible": {
        outline: "none",
      },
      "&::placeholder": {
        color: "#fff",
      },
    },
  },

  quantitybox: {
    marginTop: "30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
    "& label": {
      paddingBottom: "5px",
      color: "#FFFFFF",
      fontSize: "16px",
    },
  },
  bannerImg: {
    "& figure": {
      margin: "0",
      width: "100%",
      height: "280px",
      overflow: "hidden",
      marginBottom: "15px",
      // borderRadius: "10px",
      //   [theme.breakpoints.down('xs')]: {
      //     height: "350px"
      //   },

      "& img": {
        maxWidth: "100%",
        maxHeight: "100%",
        height: "auto",
        margin: "0",
      },
    },
  },
  gridbox: {
    order: "0",
    "@media(max-width:960px)": {
      order: "1",
    },
  },
  gridbox1: {
    order: "0",
    "@media(max-width:960px)": {
      order: "0",
    },
  },
  GridDetailBox: {
    display: "flex",
    alignItems: "center",
    margin: "30px 0px",
    "& .detailBox": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      "& p": {
        padding: "13px 0px",
      },
      "& .detailGrid": {
        height: "5px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        "&:after": {
          width: "5px",
          height: "10PX",
          position: "absolute",
          backgroundColor: "#FFFFFF",
          content: "''",
          display: "block",
          left: "50%",
        },
      },
      "& .detailGridfirst": {
        height: "5px",
        width: "50%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        "&:after": {
          width: "5px",
          height: "10PX",
          position: "absolute",
          backgroundColor: "#FFFFFF",
          content: "''",
          display: "block",
          left: "0",
        },
      },
      "& .detailGridlast": {
        height: "5px",
        width: "50%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        "&:after": {
          width: "5px",
          height: "10PX",
          position: "absolute",
          backgroundColor: "#FFFFFF",
          content: "''",
          display: "block",
          right: "0",
        },
      },
    },
  },
  ProgressBarBox: {
    marginTop: "20px",
    "& h3": {
      "@media(max-width:767px)": {
        fontSize: "13px",
      },
    },
  },
}));

export default function Mint({ setIsConnectWalletOpen }) {
  const classes = useStyles();
  const myAlgoWallet = new MyAlgoConnect();

  const algo = useContext(AlgoContext);
  const [isLoading, setIsLoading] = useState(false);
  const [unBuyNFTCount, setUnBuyNFTCount] = useState(0);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [totalNFT, setTotalNFT] = useState(0);
  const [isWhitelistLoading, setIsWhitelistLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addressStr, setAddressStr] = useState("");
  const [isPopEnable, setIsPopEnable] = useState(true);

  useEffect(() => {
    let pop = window.open(
      "about:blank",
      "new_window_123",
      "height=150,width=150"
    );

    // Detect pop blocker
    setTimeout(function () {
      if (
        !pop ||
        pop.closed ||
        typeof pop.closed == "undefined"
        // pop == "undefined" ||
        // parseInt(pop.innerWidth) == 0 ||
        // pop.document.documentElement.clientWidth != 150 ||
        // pop.document.documentElement.clientHeight != 150
      ) {
        pop && pop.close();

        setIsPopEnable(false);
      } else {
        setIsPopEnable(true);
        pop && pop.close();
      }
    }, 200);
  }, []);

  const transferAlgosToAdmin = async (algodClient, creator, nftPrice) => {
    try {
      let accountInfo = await algodClient
        .accountInformation(creator.address)
        .do();
      console.log(
        "accountInfo Account balance: %d microAlgos",
        accountInfo.amount,
        Number(accountInfo.amount) / oneAlgodPrice
      );
      const userBalance = Number(accountInfo.amount);
      if (userBalance > nftPrice * oneAlgodPrice) {
        const params = await algodClient.getTransactionParams().do();
        const receiver = adminWalletAddress;
        const amount = nftPrice * oneAlgodPrice;
        const sender = creator.address;
        // closeToRemainder will remove the assetholding from the account

        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: sender,
          to: receiver,
          amount,
          undefined,
          note: undefined,
          suggestedParams: params,
        });

        // Sign the transaction

        let binarySignedTxs = undefined;
        if (sessionStorage.getItem("walletName") == "PeraWallet") {
          console.log("algo.peraWallet", algo.peraWallet);

          const singleTxnGroups = [{ txn: txn, signers: [creator.address] }];

          binarySignedTxs = await algo.peraWallet.signTransaction([
            singleTxnGroups,
          ]);

          console.log(
            `Payment txns signed successfully! - txID: ${binarySignedTxs}`
          );
        }
        let binaryTx = txn.toByte();

        if (sessionStorage.getItem("walletName") == "AlgoSigner") {
          let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);
          let signedTxs = await AlgoSigner.signTxn([
            {
              txn: base64Tx,
            },
          ]);
          console.log("signedTxs", signedTxs);

          binarySignedTxs = AlgoSigner.encoding.base64ToMsgpack(
            signedTxs[0].blob
          );
        }

        if (sessionStorage.getItem("walletName") == "MyAlgo") {
          let signedTxs = await myAlgoWallet.signTransaction(binaryTx);
          console.log("signedTxs", signedTxs);

          binarySignedTxs = signedTxs.blob;
        }

        console.log("binarySignedTxs", binarySignedTxs);

        const tx = await algodClient.sendRawTransaction(binarySignedTxs).do();
        console.log("tx", tx);

        let assetID = null;
        // wait for transaction to be confirmed

        // wait for transaction to be confirmed
        const confirmedTxn = await waitForConfirmation(algodClient, tx.txId, 4);
        //Get the completed Transaction
        console.log(
          "Transaction " +
            tx.txId +
            " confirmed in round " +
            confirmedTxn["confirmed-round"]
        );
        let ptx = await algodClient.pendingTransactionInformation(tx.txId).do();

        console.log("ptx", ptx);

        return true;
      } else {
        toast.error("Low Balance");
        return false;
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
      return false;
    }
  };

  async function createAsset(algodClient, creator) {
    try {
      let recoveredAccount1 = algosdk.mnemonicToSecretKey(admin_mnemonic);
      console.log("==> CREATE ASSET");

      const accountInfo = await algodClient
        .accountInformation(recoveredAccount1.addr)
        .do();
      const startingAmount = accountInfo.amount;
      console.log("Alice account balance: %d microAlgos", startingAmount);
      if (Number(startingAmount) > 6 * oneAlgodPrice) {
        const nftres = await axios.get(apiConfig.nftWithoutBuy);
        if (nftres.data.statusCode === 200) {
          const nftDetails = nftres.data.result;
          // Construct the transaction
          const params = await algodClient.getTransactionParams().do();
          const assetMetadataHashURL = assetMetadataHash + nftDetails.number;
          console.log("URLLL", assetMetadataHashURL);

          const assetMetadataHashUnit = new Uint8Array(assetMetadataHashURL);

          console.log(
            "assetMetadataHashUnit",
            assetMetadataHashUnit.toString()
          );

          let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
            recoveredAccount1.addr,
            undefined,
            total,
            decimals,
            defaultFrozen,
            recoveredAccount1.addr,
            recoveredAccount1.addr,
            undefined,
            undefined,
            nftDetails.symbol,
            nftDetails.name,
            assetMetadataHashURL,
            undefined,
            params
          );

          let rawSignedTxn = txn.signTxn(recoveredAccount1.sk);
          let tx = await algodClient.sendRawTransaction(rawSignedTxn).do();

          let assetID = null;
          // wait for transaction to be confirmed

          const ptx = await waitForConfirmation(algodClient, tx.txId, 4);

          // Get the new asset's information from the creator account
          // let ptx = await algodclient.pendingTransactionInformation(tx.txId).do();
          assetID = ptx["asset-index"];
          //Get the completed Transaction
          console.log(
            "Transaction " +
              tx.txId +
              " confirmed in round " +
              ptx["confirmed-round"]
          );

          // console.log("AssetID = " + assetID);

          // const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
          //   from: recoveredAccount1.addr,
          //   total,
          //   decimals,
          //   assetName: nftDetails.name,
          //   unitName: nftDetails.symbol,
          //   assetURL: assetMetadataHashURL,
          //   assetMetadataHash: undefined,
          //   defaultFrozen,
          //   freeze: creator.address,
          //   manager: creator.address,
          //   clawback: creator.address,
          //   reserve: creator.address,
          //   suggestedParams: params,
          // });
          // console.log("txn", txn);

          // let binaryTx = txn.toByte();
          // let binarySignedTxs = undefined;
          // if (sessionStorage.getItem("walletName") == "PeraWallet") {
          //   const singleTxnGroups = [{ txn: txn, signers: [creator.address] }];

          //   binarySignedTxs = await algo.peraWallet.signTransaction([
          //     singleTxnGroups,
          //   ]);

          //   console.log(
          //     `Payment txns signed successfully! - txID: ${binarySignedTxs}`
          //   );
          // }

          // if (sessionStorage.getItem("walletName") == "AlgoSigner") {
          //   let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);
          //   let signedTxs = await AlgoSigner.signTxn([
          //     {
          //       txn: base64Tx,
          //     },
          //   ]);
          //   console.log("signedTxs", signedTxs);

          //   binarySignedTxs = AlgoSigner.encoding.base64ToMsgpack(
          //     signedTxs[0].blob
          //   );
          // }

          // if (sessionStorage.getItem("walletName") == "MyAlgo") {
          //   let signedTxs = await myAlgoWallet.signTransaction(binaryTx);
          //   console.log("signedTxs", signedTxs);

          //   binarySignedTxs = signedTxs.blob;
          // }

          // console.log("binarySignedTxs", binarySignedTxs);

          // const tx = await algodClient.sendRawTransaction(binarySignedTxs).do();
          // console.log("tx", tx);

          // let assetID = null;
          // // wait for transaction to be confirmed
          // const confirmedTxn = await waitForConfirmation(
          //   algodClient,
          //   tx.txId,
          //   4
          // );
          //Get the completed Transaction
          // console.log(
          //   "Transaction " +
          //     tx.txId +
          //     " confirmed in round " +
          //     confirmedTxn["confirmed-round"]
          // );
          // let ptx = await algodClient
          //   .pendingTransactionInformation(tx.txId)
          //   .do();

          // console.log("ptx", ptx);

          // assetID = ptx["asset-index"];
          // // console.log("AssetID = " + assetID);

          // await printCreatedAsset(algodClient, creator.address, assetID);
          // await printAssetHolding(algodClient, creator.address, assetID);

          const buyNftRes = await axios.post(
            apiConfig.buyNft,
            {
              _id: nftDetails?._id,
            },
            {
              headers: {
                token: sessionStorage.getItem("token"),
              },
            }
          );

          if (buyNftRes.data.statusCode === 200) {
          } else {
          }

          // setIsLoading(false);

          return { assetID };
        } else {
          toast.error(nftres.data.responseMessage);
        }
      } else {
        toast.error("Low Balance in admin wallet");
      }
    } catch (err) {
      console.log("ERROR", err);
      toast.error(err.message);
      setIsLoading(false);

      return { assetID: false };
    }
  }

  async function makeAssetConfigTxnWithSuggestedParamsHandler(
    algodClient,
    creator,
    assetID
  ) {
    try {
      let recoveredAccount1 = algosdk.mnemonicToSecretKey(admin_mnemonic);
      console.log("recoveredAccount1", recoveredAccount1);

      console.log("==> CREATE ASSET", assetID);

      const accountInfo = await algodClient
        .accountInformation(creator.address)
        .do();
      const startingAmount = accountInfo.amount;
      console.log("Alice account balance: %d microAlgos", startingAmount);
      if (Number(startingAmount) > 0.01 * oneAlgodPrice) {
        // Construct the transaction
        const params = await algodClient.getTransactionParams().do();
        console.log("params", params);

        const txn = algosdk.makeAssetConfigTxnWithSuggestedParams(
          recoveredAccount1.addr,
          undefined,
          assetID,
          creator.address,
          creator.address,
          creator.address,
          creator.address,
          params
        );
        console.log("txn", txn);

        let rawSignedTxn = txn.signTxn(recoveredAccount1.sk);
        let tx = await algodClient.sendRawTransaction(rawSignedTxn).do();

        // let binaryTx = txn.toByte();
        // let binarySignedTxs = undefined;
        // if (sessionStorage.getItem("walletName") == "PeraWallet") {
        //   const singleTxnGroups = [{ txn: txn, signers: [creator.address] }];

        //   binarySignedTxs = await algo.peraWallet.signTransaction([
        //     singleTxnGroups,
        //   ]);

        //   console.log(
        //     `Payment txns signed successfully! - txID: ${binarySignedTxs}`
        //   );
        // }

        // if (sessionStorage.getItem("walletName") == "AlgoSigner") {
        //   let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);
        //   let signedTxs = await AlgoSigner.signTxn([
        //     {
        //       txn: base64Tx,
        //     },
        //   ]);
        //   console.log("signedTxs", signedTxs);

        //   binarySignedTxs = AlgoSigner.encoding.base64ToMsgpack(
        //     signedTxs[0].blob
        //   );
        // }

        // if (sessionStorage.getItem("walletName") == "MyAlgo") {
        //   let signedTxs = await myAlgoWallet.signTransaction(binaryTx);
        //   console.log("signedTxs", signedTxs);

        //   binarySignedTxs = signedTxs.blob;
        // }

        // console.log("binarySignedTxs", binarySignedTxs);

        // const tx = await algodClient.sendRawTransaction(binarySignedTxs).do();
        // console.log("tx", tx);

        // wait for transaction to be confirmed
        const confirmedTxn = await waitForConfirmation(algodClient, tx.txId, 4);
        //Get the completed Transaction
        console.log(
          "Transaction " +
            tx.txId +
            " confirmed in round " +
            confirmedTxn["confirmed-round"]
        );
        let ptx = await algodClient.pendingTransactionInformation(tx.txId).do();

        console.log("ptx", ptx);

        return { assetID };
      } else {
        toast.error("Low Balance");
      }
    } catch (err) {
      console.log("ERROR", err);
      toast.error(err.message);
      setIsLoading(false);

      return { assetID: false };
    }
  }

  async function makeAssetTransferTxnWithSuggestedParamsHandler(
    algodClient,
    creator,
    assetID
  ) {
    try {
      let recoveredAccount1 = algosdk.mnemonicToSecretKey(admin_mnemonic);
      console.log("recoveredAccount1", recoveredAccount1);

      console.log("==> CREATE ASSET", assetID);

      const accountInfo = await algodClient
        .accountInformation(creator.address)
        .do();
      const startingAmount = accountInfo.amount;
      console.log("Alice account balance: %d microAlgos", startingAmount);
      if (Number(startingAmount) > 0.01 * oneAlgodPrice) {
        // Construct the transaction
        const params = await algodClient.getTransactionParams().do();
        console.log("params", params);

        const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
          creator.address,
          creator.address,
          undefined, //closeRemainderTo
          undefined, //revocationTarget
          0, //amount
          undefined, //note
          assetID,
          params
        );

        // let rawSignedTxn = opttxn.signTxn(recoveredAccount1.sk);
        // let tx = await algodClient.sendRawTransaction(rawSignedTxn).do();

        // console.log("txn", txn);

        let binaryTx = txn.toByte();
        let binarySignedTxs = undefined;

        if (sessionStorage.getItem("walletName") == "PeraWallet") {
          const singleTxnGroups = [{ txn: txn, signers: [creator.address] }];

          binarySignedTxs = await algo.peraWallet.signTransaction([
            singleTxnGroups,
          ]);

          console.log(
            `Payment txns signed successfully! - txID: ${binarySignedTxs}`
          );
        }

        if (sessionStorage.getItem("walletName") == "AlgoSigner") {
          let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);
          let signedTxs = await AlgoSigner.signTxn([
            {
              txn: base64Tx,
            },
          ]);
          console.log("signedTxs", signedTxs);

          binarySignedTxs = AlgoSigner.encoding.base64ToMsgpack(
            signedTxs[0].blob
          );
        }

        if (sessionStorage.getItem("walletName") == "MyAlgo") {
          let signedTxs = await myAlgoWallet.signTransaction(binaryTx);
          console.log("signedTxs", signedTxs);

          binarySignedTxs = signedTxs.blob;
        }

        console.log("binarySignedTxs", binarySignedTxs);

        const tx = await algodClient.sendRawTransaction(binarySignedTxs).do();
        console.log("tx", tx);

        // wait for transaction to be confirmed
        const confirmedTxn = await waitForConfirmation(algodClient, tx.txId, 4);
        //Get the completed Transaction
        console.log(
          "Transaction " +
            tx.txId +
            " confirmed in round " +
            confirmedTxn["confirmed-round"]
        );
        let ptx = await algodClient.pendingTransactionInformation(tx.txId).do();

        console.log("ptx", ptx);

        return { assetID };
      } else {
        toast.error("Low Balance");
      }
    } catch (err) {
      console.log("ERROR", err);
      toast.error(err.message);
      setIsLoading(false);

      return { assetID: false };
    }
  }

  const waitForConfirmation = async function (algodClient, txId, timeout) {
    if (algodClient == null || txId == null || timeout < 0) {
      throw new Error("Bad arguments");
    }

    const status = await algodClient.status().do();
    if (status === undefined) {
      throw new Error("Unable to get node status");
    }

    const startround = status["last-round"] + 1;
    let currentround = startround;

    while (currentround < startround + timeout) {
      const pendingInfo = await algodClient
        .pendingTransactionInformation(txId)
        .do();
      if (pendingInfo !== undefined) {
        if (
          pendingInfo["confirmed-round"] !== null &&
          pendingInfo["confirmed-round"] > 0
        ) {
          //Got the completed Transaction
          return pendingInfo;
        } else {
          if (
            pendingInfo["pool-error"] != null &&
            pendingInfo["pool-error"].length > 0
          ) {
            // If there was a pool error, then the transaction has been rejected!
            throw new Error(
              "Transaction " +
                txId +
                " rejected - pool error: " +
                pendingInfo["pool-error"]
            );
          }
        }
      }
      await algodClient.statusAfterBlock(currentround).do();
      currentround++;
    }
    throw new Error(
      "Transaction " + txId + " not confirmed after " + timeout + " rounds!"
    );
  };

  async function createNFT() {
    const checkPopUp =
      sessionStorage.getItem("walletName") == "MyAlgo" ? isPopEnable : true;
    if (checkPopUp) {
      if (moment().unix() > moment(whiteListStartTime).unix()) {
        setIsLoading(true);
        const mintedNft = totalNFT - unBuyNFTCount;
        let nftPrice = 100;
        if (mintedNft >= 0) {
          try {
            if (moment(startTime).unix() > moment().unix()) {
              if (algo.myMintedNFt.length <= 3) {
                nftPrice = 100;
                const whitelistRes = await axios.get(
                  apiConfig.checkWhitelisted,
                  {
                    params: {
                      walletAddress: algo?.account.address,
                    },
                  }
                );
                if (!whitelistRes.data.result.isCreated) {
                  setIsLoading(false);
                  toast.error("Not whitlisted");
                  return;
                }
              } else {
                setIsLoading(false);
                toast.error("Purchase exceeds max allowed per wallet.");
                return;
              }
            } else {
              nftPrice = getNftPrice(mintedNft);
            }

            console.log("nftPrice", nftPrice);

            let creator = algo.account;

            let algodClient = getAlgoClient(algodToken, algodServer, algodPort);

            const isTransfer = await transferAlgosToAdmin(
              algodClient,
              creator,
              nftPrice
            );

            if (isTransfer) {
              // CREATE ASSET

              const { assetID } = await createAsset(algodClient, creator);
              const res = await makeAssetTransferTxnWithSuggestedParamsHandler(
                algodClient,
                creator,
                assetID
              );

              console.log("res", res);
              let recoveredAccount1 =
                algosdk.mnemonicToSecretKey(admin_mnemonic);
              const params = await algodClient.getTransactionParams().do();

              const opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
                recoveredAccount1.addr,
                creator.address,
                undefined, //closeRemainderTo
                undefined, //revocationTarget
                total, //amount
                undefined, //note
                assetID,
                params
              );

              let rawSignedTxn = opttxn.signTxn(recoveredAccount1.sk);
              let tx = await algodClient.sendRawTransaction(rawSignedTxn).do();

              const confirmedTxn = await waitForConfirmation(
                algodClient,
                tx.txId,
                4
              );
              //Get the completed Transaction
              console.log(
                "Transaction " +
                  tx.txId +
                  " confirmed in round " +
                  confirmedTxn["confirmed-round"]
              );
              let ptx = await algodClient
                .pendingTransactionInformation(tx.txId)
                .do();

              console.log("ptx", ptx);

              // console.log("assetID", assetID);
              algo.getAccountAssets();
              getUnBuyNFTCountHanlder();
              toast.success("Minted Successfully");

              setIsLoading(false);
            } else {
              setIsLoading(false);
              toast.error("Something went wrong please try again..");
              return { assetID: false };
            }

            // await closeoutPrinceAlgos(algodClient, creator);
          } catch (err) {
            console.log("err", err);
            setIsLoading(false);
          }
        } else {
          toast.error("Sold Out");
        }
      } else {
        toast.info(
          `Minting not started yet, start time ${moment(
            whiteListStartTime
          ).format("DD/MM/YYYY, hh:mm:ss A")} `
        );
      }
    } else {
      toast.error("Please enable pop-ups and redirects from browser settings");
    }
  }

  const getUnBuyNFTCountHanlder = async () => {
    try {
      const res = await axios.get(apiConfig.unBuyNFTCount);
      if (res.data.statusCode == 200) {
        setUnBuyNFTCount(res.data.result);
      } else {
        setUnBuyNFTCount(0);
      }
      setIsLoadingData(false);
    } catch (error) {
      console.log("ERROR", error.message);
      setUnBuyNFTCount(0);
      setIsLoadingData(false);
    }
  };
  const getTotalNftCountHandler = async () => {
    try {
      const res = await axios.get(apiConfig.totalNft);
      if (res.data.statusCode == 200) {
        setTotalNFT(res.data.result);
      } else {
        setTotalNFT(0);
      }
    } catch (error) {
      console.log("ERROR", error.message);
      setTotalNFT(0);
    }
  };

  useEffect(() => {
    getUnBuyNFTCountHanlder();
    getTotalNftCountHandler();
  }, []);

  const addToWhitelisthandler = async () => {
    try {
      setIsWhitelistLoading(true);
      const addList = addressStr.split(",");
      const res = await axios.post(
        apiConfig.addToWhitelist,
        {
          walletAddress: addList,
        },
        {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        }
      );
      if (res.data.statusCode == 200) {
        toast.success(res.data.responseMessage);
        setIsOpenModal(false);
      } else {
        toast.error(res.data.responseMessage);
      }
      setIsWhitelistLoading(false);
    } catch (error) {
      setIsWhitelistLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* WHITELIST MODAL */}

      {isOpenModal && (
        <Dialog
          open={isOpenModal}
          onClose={() => {
            setAddressStr();
            setIsOpenModal(false);
          }}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          fullWidth
          maxWidth='sm'
          disableBackdropClick={isWhitelistLoading}
          disableEscapeKeyDown={isWhitelistLoading}
        >
          <DialogContent style={{ backgroundColor: "#000000a1" }}>
            <Box textAlign='center' mt={2}>
              <Typography variant='h6' style={{ color: "#fff" }}>
                Add To Whitelist
              </Typography>
            </Box>
            <Box p={3} style={{ color: "#fff", height: "100%" }} fullWidth>
              {/* <label style={{ color: "#fff" }}>User Wallet ID</label> */}
              <textarea
                style={{ width: "100%" }}
                placeholder='Please enter comma separated address'
                fullWidth
                onChange={(e) => setAddressStr(e.target.value)}
                rows={4}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => {
                  setIsOpenModal(false);
                  setAddressStr();
                }}
                color='primary'
                style={{ color: "#fff" }}
                disabled={isWhitelistLoading}
              >
                Cancel
              </Button>
              <Button
                disabled={isWhitelistLoading}
                color='primary'
                style={{ color: "#fff" }}
                autoFocus
                onClick={() => {
                  addToWhitelisthandler();
                }}
              >
                Submit {isWhitelistLoading && <ButtonCircularProgress />}
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}

      {!isLoadingData && (
        <Box className={classes.root}>
          <Container maxWidth='lg'>
            <Box className='headingbox'>
              <Typography variant='h1' className='wow bounceInRight'>
                MINT
              </Typography>
            </Box>
            <Grid container spacing={4} alignItems='center'>
              <Grid
                item
                xs={12}
                sm={6}
                md={8}
                lg={8}
                className={classes.gridbox}
              >
                <Box className={classes.mainBox}>
                  <Container maxWidth='sm'>
                    <Grid container spacing={2} className='wow bounceInLeft'>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box className={classes.quantitybox}>
                          <label>Amount:</label>
                          <FormControl fullWidth variant='outlined'>
                            <OutlinedInput
                              onKeyPress={(event) => {
                                if (event?.key === "-" || event?.key === "+") {
                                  event.preventDefault();
                                }
                              }}
                              className={classes.webkitcss}
                              id='outlined-adornment-amount'
                              type='text'
                              value={1}
                              inputProps={{
                                readOnly: true,
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Box className={classes.quantitybox}>
                        <label>Quantity:</label>
                        <FormControl fullWidth variant='outlined'>
                          <OutlinedInput
                            onKeyPress={(event) => {
                              if (event?.key === "-" || event?.key === "+") {
                                event.preventDefault();
                              }
                            }}
                            className={classes.webkitcss}
                            id='outlined-adornment-amount'
                            value={1}
                            type='text'
                            inputProps={{
                              readOnly: true,
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid> */}
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box mt={4} align='center'>
                          {algo?.account?.address ? (
                            <>
                              <Button
                                variant='contained'
                                size='large'
                                color='primary'
                                onClick={createNFT}
                                disabled={isLoading}
                              >
                                Mint {isLoading && <ButtonCircularProgress />}
                              </Button>
                            </>
                          ) : (
                            <Button
                              variant='contained'
                              size='large'
                              color='primary'
                              onClick={() => setIsConnectWalletOpen(true)}
                              // component={Link}
                              // to="/wallet"
                            >
                              Connect Wallet
                            </Button>
                          )}
                          {algo?.isAdmin && (
                            <>
                              {` `}
                              <Button
                                variant='contained'
                                size='large'
                                color='primary'
                                onClick={() => setIsOpenModal(true)}
                                disabled={isLoading}
                              >
                                Add to whitelist
                              </Button>
                            </>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                    <SlotBox />
                  </Container>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box className={classes.bannerImg}>
                  <LazyLoad>
                    <img src='images/MintGif.gif' style={{ width: "100%" }} />
                  </LazyLoad>
                  {/* <figure className="wow bounceInRight">
                  <img src="images/polkaIdenetity.png" alt="Mint Banner Image" />
                </figure> */}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} md={11} lg={11}>
                <Box className={classes.ProgressBarBox}>
                  <Slider
                    value={totalNFT - unBuyNFTCount}
                    max={totalNFT}
                    aria-labelledby='continuous-slider'
                    valueLabelDisplay='auto'
                  />
                  <Box mt={2} mb={2} align='center'>
                    <Typography variant='h3' className='wow bounceInUp'>
                      {totalNFT - unBuyNFTCount} / {totalNFT} REMAINING
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}

export function SlotBox() {
  const classes = useStyles();

  return (
    <Box className={classes.GridDetailBox}>
      <Box className='detailBox'>
        <Typography variant='body1'>0 - 2000</Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Box className='detailGridfirst'></Box>
        </Box>
        <Typography variant='body1'>150 ALGO</Typography>
      </Box>
      <Box className='detailBox'>
        <Typography variant='body1'>2,001 - 4,000</Typography>
        <Box className='detailGrid'></Box>
        <Typography variant='body1'>200 ALGO</Typography>
      </Box>
      <Box className='detailBox'>
        <Typography variant='body1'>4,001 - 6,000</Typography>
        <Box className='detailGrid'></Box>
        <Typography variant='body1'>250 ALGO</Typography>
      </Box>
      <Box className='detailBox'>
        <Typography variant='body1'>6,001 - 8,000</Typography>
        <Box className='detailGrid'></Box>
        <Typography variant='body1'>300 ALGO</Typography>
      </Box>
      <Box className='detailBox'>
        <Typography variant='body1'>8,001 - 10,000</Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Box className='detailGridlast'></Box>
        </Box>
        <Typography variant='body1'>350 ALGO</Typography>
      </Box>
    </Box>
  );
}
