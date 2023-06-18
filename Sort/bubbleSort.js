function bubbleSort(arr) {

    const swap = (arr, idx1, idx2) => (
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    )

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

console.log(bubbleSort([30, 10, 11, 8, 5, 7, 3, 11]))

/*
Time: O(n^2) where n is the length of the array
Space: O(1) constant
*/
