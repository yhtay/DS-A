// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j
//             }
//         }
//         if (lowest !== i) {
//             let temp = arr[i];
//             arr[i] = arr[lowest]
//             arr[lowest] = temp
//         }
//     }
//     return arr;
// }

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
  }

console.log(selectionSort([40, 10, 88, 3, 2, 9, 5]))


/*
Time: O(n^2) where n is the length of the array
Better if goal is to minimize the number of swaps
Space: O(1) constant
*/
