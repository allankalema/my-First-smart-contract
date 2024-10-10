async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // PancakeSwap Router and BUSD token address on BSC Testnet
    const uniswapRouterAddress = "0x9ac64cc6e4415144c455bd8e4837fea55603e5c3"; 
    const tokenAddress = "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee"; // BUSD Testnet
  
    const TokenBuyer = await ethers.getContractFactory("TokenBuyer");
    const tokenBuyer = await TokenBuyer.deploy(uniswapRouterAddress, tokenAddress);
  
    console.log("TokenBuyer contract deployed to:", tokenBuyer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  