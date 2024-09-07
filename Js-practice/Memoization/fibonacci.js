// 0 1 1 2 3 5 8 ...

// without memo
function fibonacci(n) {
    if(n<=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// with memo

function fibonacci(n, memo={}) {
    if(n<=1) return n;
    if(memo[n]) {
        return memo[n];
    } else {
        memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
        return memo[n];
    }
}