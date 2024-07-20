const isOddOrEven = (num:number):boolean => {
   if(num%2 === 0)
   {
    return true;
   }
   else{
    return false;
   }
}

console.log(isOddOrEven(6));

function isDivisibleBy4And8(number: number):boolean {
    return number % 4 === 0 && number % 8 === 0;
}

// Example usage:
console.log("32 is divisible by 4 and 8",isDivisibleBy4And8(32)); // true
console.log("17 is divisible by 4 and 8",isDivisibleBy4And8(17)); // false