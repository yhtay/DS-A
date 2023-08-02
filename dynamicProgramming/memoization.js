function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    // console.log(memo)
    return memo[n]
}

console.log(fib(10))

/*
Time: O(N) N is the size of n
Space: O(N) N is the size of n
*/
