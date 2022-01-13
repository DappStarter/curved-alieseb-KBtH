require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift radar random coach inflict climb metal gift'; 
let testAccounts = [
"0xb7674cf7d93f95476b4f60f1e5f128441127e73c3bf88e6cbf8d681b9cd53c6e",
"0x6a37276ae7ffe04ba9071e434422f7013c46ba8e80a0c2f283cf81625f74ff98",
"0x49d4e396c29a818f3c90745b0b8acfe7b31879be2bacc4adbce49d6695b949b0",
"0x2144f2555277db51ca6f8bfc5065b1bba1deaf018163f90a6a4c7558508d9f84",
"0x9073317f43ebe952993b6adfc14f6d9fbc3a02dda21ecdfca5ab1d0a83664392",
"0xc69e2aa2ea3d19a7e99c93b674eef81548bb6b0794257f25727dd26186a9d03a",
"0x918e31e2e8484ebdf157da7b1e1b6ebb727049bd0b49eaf1703ffa4e075428d8",
"0x252f7045f79f449782360e8240e88076de45202e4abf0387b03f24486c9b9e86",
"0x46646bf093ac50af49fe382b7c240441ffd6cc4ef290e95088af69a7aa52b18b",
"0x9c84a8581c73ef1cda9acedac1f5b53f9acf1dfd9c08066cd77b1503c2fdd83c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

