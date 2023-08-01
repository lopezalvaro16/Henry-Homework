'use strict';

function BinarioADecimal(num) {
   let sum = 0;

   num = num.split("").reverse()
   for (let i = 0; i < num.length; i++) {
      sum += (2**i)*num[i]
   }
   return sum
}

function DecimalABinario(num) {
   if (num === 0) {
     return '0';
   }
 
   let binario = '';
   while (num > 0) {
     const digitoBinario = num % 2;
     binario = digitoBinario + binario;
     num = Math.floor(num / 2);
   }
 
   return binario;
 }

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
