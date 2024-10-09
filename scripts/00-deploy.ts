import { ethers } from "hardhat"

async function main() {  

    const Unit0 = await ethers.getContractFactory("Unit0")
    const mintTo = "" // address
    const supply = ethers.parseUnits("100000000.0", 18)

    const token = await Unit0.deploy(mintTo, supply, {
        gasLimit: 10000000
    })
    
    console.log(`Deployed Unit0 at address: ${token.target}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})