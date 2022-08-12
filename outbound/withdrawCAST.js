const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
    const provider = new ethers.providers.WebSocketProvider(
		`wss://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
	);
    const signer = provider.getSigner();
    console.log(signer);
}

main();