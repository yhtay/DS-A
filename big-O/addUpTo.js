function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}


let t1 = performance.now();
console.log(addUpTo(100000))
let t2 = performance.now()

console.log(`Time Elaped: ${t2 - t1 / 1000} seconds.`)

/*
Time: O(n) - n is size of n(parameter)

*/
