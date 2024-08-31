# BLAST SUSHISWAP QUOTER V1 

It simulates the results of exactInputSingle operation on sushiswap and supports only Blast blockchain. By default it simulates following swap WETH-USDB but the swap pair can be modified by following section of index.js as changing the value of tokenIn and tokenOut: 
```
      const params = {
        tokenIn: '0x4300000000000000000000000000000000000004', //weth
        tokenOut: '0x4300000000000000000000000000000000000003', //usdb
        amountIn: ethers.parseEther('1'), // 1 = 0x016345785d8a0000 
        fee: 3000,
        sqrtPriceLimitX96: 0
      };
```

## Getting Started 
1. `git clone https://github.com/Taneristique/BLAST-SUSHISWAP-QUOTER.git`
2. `npm i`
3. `npm run test`



