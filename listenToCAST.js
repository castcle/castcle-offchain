const ethers = require("ethers");
const castABI = require("./abis/CAST.json");
require("dotenv").config();

async function main() {
	const castAddress = "0x0d78e1Abc0c8568011F6a02dA93Cfa997b4FE479";
	const provider = new ethers.providers.WebSocketProvider(
		`wss://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
	);

	const contract = new ethers.Contract(castAddress, castABI, provider);

	contract.on("Transfer", (from, to, value, event) => {
		let info = {
			from: from,
			to: to,
			value: ethers.utils.formatUnits(value, 18),
			data: event,
		};
		console.log(JSON.stringify(info, null, 4));
	});
}

main();