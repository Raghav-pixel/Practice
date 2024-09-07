// without memo

function factorial(n) {
    if(n<=1) return 1;
    return n*factorial(n-1);
}

// with memo

function factorial(n, memo={}) {
    if(n<=1) return 1;
    if(memo[n]) {
        return memo[n];
    } else {
        memo[n] = n*factorial(n-1);
        return memo[n];
    }
}