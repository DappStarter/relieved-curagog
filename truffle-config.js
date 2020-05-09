require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain huge include arctic swift sock'; 
let testAccounts = [
"0x22c4106e68409186c6531fcc15cc5ea09ba515e90149b86d8eb8944b0ad2f35d",
"0x34eb9dbfa18123f4b5867cf1cbf524fe869d6ca8b7f4e1c0498822159d19989e",
"0x080e559cd839fb9ea9743891d6c1c106579b58df46c2f83afbcf607ec98d8b40",
"0x15d1af3c1045dca51c35febbf51c5b88651edc64e2f464c8a3ac3cf1fc544904",
"0x09813ae8f0bb172f674d42b2ffe27285379cb4e4019f2bd6d8e9930882b3e588",
"0xb266506e76775e8dafe2a9fb85d02316aff5399f8243b2b2a527db0a1b529f94",
"0xd3e865810a2f622a5e4336986dbfff3fa76289f8d9077b89dd4172e44a2adda1",
"0x89863b5f0621e062a3ae94ac24c4552f1a23384b806c28b91c5be4194d09e305",
"0x26dfcf2a9927ddbc9742c7266866f2da097863c831b1a8dc6ee9d93268f9e7ee",
"0xee38e23641fe766da1cec3567c29a05094a6bf2dacab3049e40acf87c88fbd8b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
