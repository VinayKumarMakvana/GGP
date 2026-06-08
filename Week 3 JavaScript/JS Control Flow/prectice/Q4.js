function findPrimes() {
    
    // Starting from the first prime number
    let num = 2; 
    while (num <= 20) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
        num++;
    }
}

// Test the function
findPrimes();