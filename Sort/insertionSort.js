function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal
        }
    }
    return arr
}

console.log(insertionSort([2, 1, 8, 6, 3, 9]))
console.log(insertionSort([2, 1, 8, 6, 3, 9, 3 ,8, 6]))

/*
Time: O(n^2) where n is the length of the array
Good for Online data where data is coming it one at a time on a stream or live, since part of the array is kept sorted

Space: O(1) constant
*/
