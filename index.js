const {ethers, formatEther} = require('ethers');
const public_rpc = 'https://rpc.envelop.is/blast';
const provider = new ethers.JsonRpcProvider(public_rpc);
  const sushiQuoterV2Address = '0xD93a91442Afd80243cF12f7110f48aB276fFf33F';
  const sushiAbi = [
    {
      "inputs": [
        {
          "components": [
            {"internalType": "address", "name": "tokenIn", "type": "address"},
            {"internalType": "address", "name": "tokenOut", "type": "address"},
            {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
            {"internalType": "uint24", "name": "fee", "type": "uint24"},
            {"internalType": "uint160", "name": "sqrtPriceLimitX96", "type": "uint160"}
          ],
          "internalType": "struct IQuoterV2.QuoteExactInputSingleParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "quoteExactInputSingle",
      "outputs": [
        {"internalType": "uint256", "name": "amountOut", "type": "uint256"},
        {"internalType": "uint160", "name": "sqrtPriceX96After", "type": "uint160"},
        {"internalType": "uint32", "name": "initializedTicksCrossed", "type": "uint32"},
        {"internalType": "uint256", "name": "gasEstimate", "type": "uint256"}
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  const quoterV2Contract = new ethers.Contract(sushiQuoterV2Address, sushiAbi, provider);
  const callQuoteExactInputSingle=async()=>{
    const params = {
        tokenIn: '0x4300000000000000000000000000000000000004', //weth
        tokenOut: '0x4300000000000000000000000000000000000003', //usdb
        amountIn: ethers.parseEther('1'), 
        fee: 3000,
        sqrtPriceLimitX96: 0
      };
    const callOutput = await quoterV2Contract.quoteExactInputSingle.staticCall(params);
    console.log(`swap output : ${ethers.formatEther(callOutput[0])}\nsqrtPriceX96After:${callOutput[1]}\ninitializedTicksCrossed:${callOutput[2]}\nestimated gas:${ethers.formatUnits(callOutput[3],9)}`);
}
callQuoteExactInputSingle();
