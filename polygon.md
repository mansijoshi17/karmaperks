## Polygon

##### https://github.com/mansijoshi17/karmaperks_contracts/blob/master/hardhat.config.js

## Contracts on Mumbai:

https://mumbai.polygonscan.com/address/0x0c6De33854598A121Ca928A0cb2aA5F847CE3477

https://mumbai.polygonscan.com/address/0x4934cB7e5109B68F37F4F02b68CA1390089559c9

https://mumbai.polygonscan.com/address/0x28D109BB4dE67127346B831a01D51344E6825d8b

```
 require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 10000,
    },
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    celo: {
      url: `https://alfajores-forno.celo-testnet.org`,
      accounts: [PRIVATE_KEY],
      chainId: 44787,
    },
    hyperspace: {
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
      chainId: 3141,
    },
  },
  mocha: {
    timeout: 400000000,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
```
