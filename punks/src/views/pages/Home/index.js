import React, { useRef, useEffect, useContext, useState } from "react";
import Page from "src/component/Page";
import AlgoPunk from "./AlgoPunk";
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import HowToBuy from "./HowToBuy";
import MutantPunk from "./MutantPunk";
import Mint from "./Mint";
import MyWallet from "./MyWallet";
import RarityGrid from "./RarityGrid";
import FAQ from "./FAQ";
import TopBar from "src/layouts/HomeLayout/TopBar";
import { AlgoContext } from "src/context/Algo";

import { PeraWalletConnect } from "@perawallet/connect";
import ConnectWalletModal from "src/component/ConnectWalletModal";

const peraWallet = new PeraWalletConnect();

function Home({ scrollTo }) {
  const algo = useContext(AlgoContext);
  const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);

  const refs = {
    banner: useRef(null),
    algopunk: useRef(null),
    airdrop: useRef(null),
    mint: useRef(null),
    roadmap: useRef(null),
    rarityGrid: useRef(null),
    mywallet: useRef(null),
    faq: useRef(null),
    howtobuy: useRef(null),
  };
  const onButtonClick = (abc) => {
    window.scrollTo({
      top: refs[abc].current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   // Reconnect to the session when the component is mounted
  //   peraWallet
  //     .reconnectSession()
  //     .then((accounts) => {
  //       peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
  //       if (accounts.length) {
  //         console.log("newAccounts", accounts);
  //         let accArr = [];
  //         for (let i = 0; i < accounts.length; i++) {
  //           const acc = accounts[i];
  //           let obj = {
  //             address: acc,
  //           };
  //           accArr.push(obj);
  //         }
  //         console.log("accArr", accArr);

  //         algo.setAccountList(accArr);
  //         algo.setAccount(accArr[0]);
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  async function handleConnectWalletClick() {
    const accounts = await peraWallet.connect();
    console.log("peraWallet", peraWallet);
    console.log("accounts", accounts);
    algo.setPeraWallet(peraWallet);
    if (accounts.length) {
      console.log("newAccounts", accounts);
      let accArr = [];
      for (let i = 0; i < accounts.length; i++) {
        const acc = accounts[i];
        let obj = {
          address: acc,
        };
        accArr.push(obj);
      }
      console.log("accArr", accArr);

      algo.setAccountList(accArr);
      algo.setAccount(accArr[0]);
    }
  }

  // function handleConnectWalletClick() {
  //   console.log("newAccounts");

  //   peraWallet.connect().then((newAccounts) => {
  //     peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
  //     console.log("newAccounts", newAccounts);
  //     let accArr = [];
  //     for (let i = 0; i < newAccounts.length; i++) {
  //       const acc = newAccounts[i];
  //       let obj = {
  //         address: acc,
  //       };
  //       accArr.push(obj);
  //     }
  //     algo.setAccountList(accArr);
  //     algo.setAccount(accArr[0]);
  //   });
  // }
  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
  }

  useEffect(() => {
    handleDisconnectWalletClick();
  }, []);

  return (
    <Page title='AlgoPunks'>
      {isConnectWalletOpen && (
        <ConnectWalletModal
          open={isConnectWalletOpen}
          handleClose={() => setIsConnectWalletOpen(false)}
          handleConnectWalletClick={() => handleConnectWalletClick()}
        />
      )}

      <TopBar buttonClick={onButtonClick} />
      <div ref={refs.banner}>
        <Banner />
      </div>
      <div ref={refs.algopunk}>
        {" "}
        <AlgoPunk />
      </div>
      <div ref={refs.airdrop}>
        <MutantPunk />{" "}
      </div>
      <div ref={refs.mint}>
        <Mint
          handleConnectWalletClick={handleConnectWalletClick}
          setIsConnectWalletOpen={(data) => setIsConnectWalletOpen(data)}
        />{" "}
      </div>
      <div ref={refs.roadmap}>
        <Roadmap />
      </div>
      <div ref={refs.rarityGrid}>
        <RarityGrid />
      </div>
      <div ref={refs.mywallet}>
        <MyWallet
          setIsConnectWalletOpen={(data) => setIsConnectWalletOpen(data)}
          handleConnectWalletClick={handleConnectWalletClick}
        />
      </div>
      <div ref={refs.faq}>
        <FAQ />
      </div>
      <div ref={refs.howtobuy}>
        {" "}
        <HowToBuy />
      </div>
    </Page>
  );
}

export default Home;
