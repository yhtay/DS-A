function pivotHelper(arr, start=0, end=arr.length + 1) {

    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // can also use for base case: if (left >= right) return arr;
    if (left < right) {
        let pivotIdx = pivotHelper(arr, left, right)
        // left
        quickSort(arr, left, pivotIdx - 1)
        // right
        quickSort(arr, pivotIdx + 1, right)
        return arr
    }
}

// console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3]))
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))

/*
Time Complexity:
Best & Average: O(n log n)
    - O(log n) from the number of times the array is split or decompose grows as array gets longer
    - O(n) from the number of comparisions per decomposition
Worst: O(n^2)
    - If the pivot is the smallest or the largest of the array and the array is already sorted it becomes:
    - O(n) from the number of times the array is split or decompose grows as array gets longer
    - O(n) from the number of comparisions per decomposition

Space Complexity:
    O (log n) n is the length/size of the array. Recursive calls where the arrays is divided in half makes it log n.
*/
