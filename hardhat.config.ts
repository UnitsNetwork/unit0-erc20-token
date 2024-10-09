import * as dotenv  from "dotenv"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-etherscan"
import "@openzeppelin/hardhat-upgrades"
import "@nomiclabs/hardhat-waffle"

dotenv.config({path: __dirname + '/.env'})

import { HardhatUserConfig } from "hardhat/config"

/** @type import('hardhat/config').HardhatUserConfig */

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 111,
            accounts: [
                {
                    privateKey: "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362", 
                    balance: "10000000000000000000000"
                }
            ]
        },
        patexTestnet: {
            url: "https://test-rpc.patex.io",
            chainId: 471100,
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362"
            ]
        },
        localhost: {
            chainId: 111
        },
        bscTestnet: {
            url: "https://bsc-testnet.public.blastapi.io/",
            chainId: 97,
            accounts: [
                "0x9b01a9cf45d3101ad9df73e33e7f86dcee9b08bdc20432cf7b54b282aa43999f",
            ]
        },
        ftmTestnet: {
            url: "https://rpc.testnet.fantom.network/",
            chainId: 4002,
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362",
            ]
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/",
            chainId: 11155111,
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362"
            ]
        },
        bsc: {
            url: "https://rpc.ankr.com/bsc/2aa515092040ec4004da5f28e7d81662732a88299083186c56cfdac2350b034b",
            chainId: 56,
            accounts: [
                "0x8c39fe6430d12c5f47bc7732042e4ef7fc281263e349c436cbdf4e7adb005257"
            ]
        },
        eth: {
            url: "https://eth-mainnet.g.alchemy.com/v2/t50jA8Szq3vR_ZoutVoUsW55Hg07mfFj",
            chainId: 1, 
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362"
            ]
        },
        polygon: {
            url: "https://rpc.ankr.com/polygon/2aa515092040ec4004da5f28e7d81662732a88299083186c56cfdac2350b034b",
            chainId: 137,
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362"
            ]
        },
        avax: {
            url: "https://rpc.ankr.com/avalanche/",
            chainId: 43114,
            accounts: [
                "0xca44f3e294b104979e5b4978149662e807340a1e09bb18ef123c007ddb0e2362"
            ]
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    optimizer: {
                      enabled: true,
                      runs: 200,
                    },
                }
            }
        ],
    },
    etherscan: {
        apiKey: {
            mainnet: "RE74DTBY7GJSPJT9J91K3JU5644G8Y2DTN",
            bsc: "JBT3FIACXP2GSGNARJJD78Q6ZAQXWNHUEM",
            polygon: "TGU6AST6XFIIWYCYRMZJ3JZ9Z85DUESXDQ",
            sepolia: "",
            bscTestnet: "",
            ftmTestnet: ""
        }
    }
}

export default config