## FVM (Testnet)

##### https://github.com/mansijoshi17/karmaperks_contracts/blob/master/hardhat.config.js

## Contracts on Hyperspace:

https://hyperspace.filfox.info/en/address/0xCed7602Cf5BFb46806a8b6faDaE341C03F456A56

https://hyperspace.filfox.info/en/address/0xe551aA97C6b8f333A28a890ADF2db4134A0ada10

https://hyperspace.filfox.info/en/address/0x1e4c74627F12cBbCDc0e4111AF475135174D3Ff8

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

