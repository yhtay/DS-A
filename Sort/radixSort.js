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

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []) // [ [], [], [], [], [], [], [], [], [], [] ]
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

// console.log(getDigit(75432, 3)) //5
// console.log(digitCount(4300)) //4
// console.log(mostDigits([303, 101313, 11, 8, 5, 7, 3, 11])) // 6
console.log(radixSort([30, 10, 11, 808, 5, 7890, 3, 11]))
