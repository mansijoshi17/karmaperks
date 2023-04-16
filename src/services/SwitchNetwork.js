import {ethers} from 'ethers';
import { toast } from 'react-toastify';

 export const switchNetwork=async(chainId)=> {
    try {
        // check if the chain ID is already available in MetaMask
        const chainData = await window.ethereum.request({
            method: "eth_chainId",
            params: [],
        });

        if (chainData !== chainId && chainId === ethers.utils.hexValue(5)) {
            const rpcUrl = "https://rpc.ankr.com/eth_goerli"; // replace with your RPC URL
            const chainName = "Goerly"; // replace with your chain name
            const symbol = "ETH"; // replace with your chain symbol
            const decimals = 18; // replace with your token's decimals
            const chainParams = {
                chainId: chainId,
                chainName: chainName,
                nativeCurrency: {
                    name: chainName,
                    symbol: symbol,
                    decimals: decimals,
                },
                rpcUrls: [rpcUrl],
            };
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [chainParams],
            });
        } else if (chainData !== chainId && chainId === ethers.utils.hexValue(80001)) {
            const rpcUrl = "https://rpc-mumbai.maticvigil.com"; // replace with your RPC URL
            const chainName = "Polygon Testnet Mumbai"; // replace with your chain name
            const symbol = "MATIC"; // replace with your chain symbol
            const decimals = 18; // replace with your token's decimals
            const chainParams = {
                chainId: chainId,
                chainName: chainName,
                nativeCurrency: {
                    name: chainName,
                    symbol: symbol,
                    decimals: decimals,
                },
                rpcUrls: [rpcUrl],
            };
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [chainParams],
            });

        } else if (chainData !== chainId && chainId === ethers.utils.hexValue(44787)) {

            const rpcUrl = "https://alfajores-forno.celo-testnet.org"; // replace with your RPC URL
            const chainName = "Celo Alfajores Testnet"; // replace with your chain name
            const symbol = "CELO"; // replace with your chain symbol
            const decimals = 18; // replace with your token's decimals
            const chainParams = {
                chainId: chainId,
                chainName: chainName,
                nativeCurrency: {
                    name: chainName,
                    symbol: symbol,
                    decimals: decimals,
                },
                rpcUrls: [rpcUrl],
            };
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [chainParams],
            });
        } else if (chainData !== chainId && chainId === ethers.utils.hexValue(3141)) {
            // chain ID is not available, add the chain to MetaMask
            const rpcUrl = "https://api.hyperspace.node.glif.io/rpc/v1"; // replace with your RPC URL
            const chainName = "Filecoin hyperspace"; // replace with your chain name
            const symbol = "tFIL"; // replace with your chain symbol
            const decimals = 18; // replace with your token's decimals
            const chainParams = {
                chainId: chainId,
                chainName: chainName,
                nativeCurrency: {
                    name: chainName,
                    symbol: symbol,
                    decimals: decimals,
                },
                rpcUrls: [rpcUrl],
            };
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [chainParams],
            });
        }
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `${chainId}` }], // chainId must be in HEX with 0x in front
        });
        document.location.reload();
    } catch (error) {
        toast.error(error.message);
    }
}
