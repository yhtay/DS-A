function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = Math.max(count, digitCount(arr[i]))
    }
    return count
}

// console.log(getDigit(75432, 3)) //5
// console.log(digitCount(4300)) //4
// console.log(mostDigits([303, 101313, 11, 8, 5, 7, 3, 11])) // 6
