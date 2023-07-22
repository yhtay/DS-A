function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }
    return results;
}

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr;

    // splite the array in half
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

console.log(mergeSort([1, 10, 9, 7, 50, 99, 2, 14, 99, 100, 3]))

/*
Time Complexity: O(n log n) where n is the length of the array
    - O(log n) from the number of times the array is split or decompose grows as array gets longer
    - O(n) from the number of comparisions per decomposition

Space complexity: O(n) where n is the length of the array
*/
