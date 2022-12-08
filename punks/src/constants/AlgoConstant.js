import algosdk from "algosdk";

export const startTime = "2022-06-12T19:00:00Z";
export const whiteListStartTime = "2022-06-11T19:00:00Z";
export const admin_mnemonic = `turkey ship alert pizza admit trouble grocery april retire popular divert come wrong charge music reject club shuffle demand festival caught bubble ticket able napkin`;
export const adminWalletAddress =
  process.env.REACT_APP_NETWORK_TYPE == "TestNet"
    ? "NVOLDU44DFHUBLQ3KXEWC4T6WERV5VWCKYNZBKGM6A66MB3TOLQYFQJO2Y"
    : "RPLQYHRUYCJN7MN3LU7IAY3IIE2GEX2VTCWB53H46HJUSAXFP34H7UYRTM";
export const oneAlgodPrice = 1000000; // 1000
export const managerAddr =
  process.env.REACT_APP_NETWORK_TYPE == "TestNet"
    ? "NVOLDU44DFHUBLQ3KXEWC4T6WERV5VWCKYNZBKGM6A66MB3TOLQYFQJO2Y"
    : "RPLQYHRUYCJN7MN3LU7IAY3IIE2GEX2VTCWB53H46HJUSAXFP34H7UYRTM";
export const reserveAddr = undefined;
export const freezeAddr = undefined;
export const clawbackAddr = undefined;
export const assetMetadataHash =
  "https://gateway.pinata.cloud/ipfs/QmTXrTAhZt49qBH3W1stgM7am4ELwYMUfKKybbvUE1sbo2/";
export const total = 1; // NFTs have totalIssuance of exactly 1
export const decimals = 0; // NFTs have decimals of exactly 0
export const defaultFrozen = false;

export const networkType = process.env.REACT_APP_NETWORK_TYPE;

//   get from purestake
export const algodToken = {
  "x-api-key": process.env.REACT_APP_ALGOD_TOKEN_KEY,
};
//   get from purestake

export const algodServer =
  process.env.REACT_APP_NETWORK_TYPE == "TestNet"
    ? "https://testnet-algorand.api.purestake.io/ps2"
    : process.env.REACT_APP_ALGOD_SERVER_URL;

export const algodPort = 443;

export const getAlgoClient = (algodToken, algodServer, algodPort) => {
  let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  return algodClient;
};

export const getNftPrice = (nftCount) => {
  if (nftCount >= 0 && nftCount <= 2000) {
    return 150;
  }
  if (nftCount > 2000 && nftCount <= 4000) {
    return 200;
  }
  if (nftCount > 4000 && nftCount <= 6000) {
    return 250;
  }
  if (nftCount > 6000 && nftCount <= 8000) {
    return 300;
  }
  if (nftCount > 8000 && nftCount < 10000) {
    return 350;
  }
};
