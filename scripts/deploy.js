const hre = require('hardhat');
const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // Fund the account with some Ether (adjust the value as needed)

  try {
  } catch (error) {
    console.error('Error funding account:', error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
