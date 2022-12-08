export const NetworkContextName = "Kovan Test Network";
export const ACTIVE_NETWORK = 42;
export const CryptochipsContract = "0x03eb3310A8d3cE67e8483ce30A02Beb8841c552C";
export const baseURI =
  "https://ipfs.io/ipfs/QmdP6VwefyuVTz3k7n2AcPv16HxJ3fz3zN23vAkJY9S6ST";

export const RPC_URL =
  "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export const NetworkDetails = [
  {
    chainId: "0x2A",
    chainName: "Kovan Test Network",
    nativeCurrency: {
      name: "Kovan Test Network",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://kovan.etherscan.io"],
  },
];

export const countDownDate = new Date("Nov 19, 2021 08:00:00 PST").getTime();
export const countDownDate1 = countDownDate.toLocaleString("en-US", {
  timeZone: "America/New_York",
});
