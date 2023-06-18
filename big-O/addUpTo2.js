function addUpTo2(n) {
    return n * (n + 1)/2
}

let t3 = performance.now();
console.log(addUpTo2(100000))
let t4 = performance.now();

console.log(`Time Elaped: ${t3 - t4 / 1000} seconds.`)

/*
Time: O(1) - constant

*/
