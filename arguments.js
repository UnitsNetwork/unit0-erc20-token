import { ethers } from "hardhat"

const mintTo = "" // address
const supply = ethers.parseUnits("100000000.0", 18)

module.exports = [ 
    mintTo,
    supply
]