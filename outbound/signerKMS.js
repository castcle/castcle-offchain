// import { KMS } from 'aws-sdk';
// import { KMS, CancelKeyDeletionCommand } from "@aws-sdk/client-kms";
const { KMS, CancelKeyDeletionCommand } = require("@aws-sdk/client-kms");
require("dotenv").config();
// import { dotenv } from 'dotenv';
// dotenv.config();

const kms = new KMS({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    apiVersion: '2014-11-01',
});

const pubKey = kms.getPublicKey({
    KeyId: '51a0326c-5dac-4614-8f0a-7eda37f3d5bc'
});

(async () => {
    await console.log(pubKey);
})