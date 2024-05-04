function fibonacci(n) {
    let fibSequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibSequence;
}

function main() {
    while (true) {
        let numTerms = parseInt(prompt("Enter the number of terms in the Fibonacci sequence (less than 100):"));
        if (isNaN(numTerms) || numTerms >= 100) {
            alert("Error: Number of terms must be less than 100 and a valid integer.");
        } else if (numTerms <= 0) {
            alert("Error: Number of terms must be a positive integer.");
        } else {
            const fibSequence = fibonacci(numTerms);
            alert("Fibonacci sequence: " + fibSequence.join(" "));
            break;
        }
    }
}

main();