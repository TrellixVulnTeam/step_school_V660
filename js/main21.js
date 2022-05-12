const getProfit = (sum, amount) => console.log(sum * (5 / 100) / 365 * 30 * amount);
getProfit(1000, 5);


const reverseNumber = num => {
    let firstDigit = num % 10,
        secondDigit = num % 100 - firstDigit,
        thirdDigit = num % 1000 - secondDigit - firstDigit,
        forthDigit = num % 10000 - thirdDigit - secondDigit - firstDigit;

    console.log( firstDigit * 1000 + secondDigit * 10 + thirdDigit / 10 + forthDigit / 1000 );
}

reverseNumber(1234);

