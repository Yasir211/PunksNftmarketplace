const baseURL =
  process.env.REACT_APP_NETWORK_TYPE == "TestNet"
    ? "https://node-algopunks.mobiloitte.com"
    : process.env.REACT_APP_API_URL;

export const apiConfig = {
  nftWithoutBuy: `${baseURL}/api/v1/nft/nftWithoutBuy`,
  buyNft: `${baseURL}/api/v1/nft/buyNft`,
  unBuyNFTCount: `${baseURL}/api/v1/nft/unBuyNFTCount`,
  totalNft: `${baseURL}/api/v1/nft/totalNft`,
  connectWallet: `${baseURL}/api/v1/nft/connectWallet`,
  addToWhitelist: `${baseURL}/api/v1/wallet/addToWhitelist`,
  checkWhitelisted: `${baseURL}/api/v1/wallet/checkWhitelisted`,
};
