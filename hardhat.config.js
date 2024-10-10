require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17" // Match the version for TokenBuyer
      },
      {
        version: "0.8.27" // Match the version for Lock.sol
      }
    ]
  },
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97, // BSC Testnet chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`]// Private key from Metamask wallet
    }
  }
};


// https://testnet.bscscan.com/address/0xa846dff198d7030878316f45DC0B9DAB2e5FB1B9


// PS D:\Notes\Work\Yasin> npx hardhat run scripts/deploy.js --network bscTestnet
// Deploying contracts with the account: 0x7FeF4fdffA27293E91f638Dd832F29390377468f
// Account balance: 300000000000000000
// TokenBuyer contract deployed to: 0xa846dff198d7030878316f45DC0B9DAB2e5FB1B9
// PS D:\Notes\Work\Yasin>