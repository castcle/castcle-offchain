const { ethers } = require("ethers");
const castABI = require("../abis/CAST.json");
const { KMSSigner } = require("@rumblefishdev/eth-signer-kms");
const { KMS } = require("@aws-sdk/client-kms");

require("dotenv").config();

async function sendNative() {
    const provider = new ethers.providers.JsonRpcProvider(
		`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
	);
    const gasPrice = await provider.getGasPrice();
    const wallet = ethers.Wallet.fromMnemonic(`${process.env.MME}`);
    const signer = wallet.connect(provider);

    const recipient = "0x965bdADfc66a4112a9245202127AA6a76e96dC3f"; // get recipient from queue
    const amount = "0.01"; // get amount from queue

    const rawTx = {
        from: wallet.address,
        to: recipient,
        value: ethers.utils.parseUnits(amount, 'ether'),
        gasPrice: gasPrice,
        gasLimit: ethers.utils.hexlify(100000), // 100 gwei
        nonce: provider.getTransactionCount(wallet.address, 'latest'),
    };

    const Tx = await signer.sendTransaction(rawTx); // broadcast

    console.log(Tx);
}

async function sendERC20(recipient, amount) {
    // const recipient = "0x965bdADfc66a4112a9245202127AA6a76e96dC3f";
    // const amount = "999";
    const kms = new KMS({
        accessKeyId: 'AKIAQUQ6G3ANTD4FT5O4',
        secretAccessKey: 'oX0986mfQulX0nHR8Fbg5olK4mcnqpTD9jWCbKi',
        region: 'us-east-1',
        apiVersion: '2014-11-01',
    });
    const keyId = "51a0326c-5dac-4614-8f0a-7eda37f3d5bc";
    const castAddress = "0x0d78e1Abc0c8568011F6a02dA93Cfa997b4FE479";
    const provider = new ethers.providers.JsonRpcProvider(
        `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
    );
    const signer = new KMSSigner(provider, keyId, kms);
    // const wallet = ethers.Wallet.fromMnemonic(`${process.env.MME}`);
    // const signer = wallet.connect(provider);

    const contract = new ethers.Contract(castAddress, castABI, provider);
    // const balanceOf = await contract.balanceOf(wallet.address);

    // const signerContract = contract.connect(signer);
    const signerContract = contract.connect(signer);
    

    const Tx = await signerContract.transfer(recipient, ethers.utils.parseUnits(amount, 'ether'));
    console.log(Tx);

}

sendERC20("0x965bdADfc66a4112a9245202127AA6a76e96dC3f", "199");