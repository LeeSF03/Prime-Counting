var num = 420;

count_prime_less_than = (num) => {
    let range = [...Array(num + 1).keys()]; //create an array of number ranging from 0 to the assgin variable num
    // console.log(JSON.stringify(range));
    let notPrimes = []; // an array to contain the non primes

    for (i in range) { //iterate trough each number in the range
        for (let j = 2; j <= Math.round(range[i]/2); j++) { // divide all the number that is less than half of it to check wheter it's a prime
            if (range[i] % j === 0) {
                // console.log(range[i]);
                notPrimes.push(range[i]) // add the non prime into the array 
                break;
            }
        }
        
    }
    // console.log(JSON.stringify(notPrimes))
    
    console.log(range.length - notPrimes.length - 2) 
    /**
     * the number of numbers in the range substract the number of non primes
     * the 2 subtraction is to take into account that 0 and 1 are considered priome numbers
     */
}

count_prime_less_than(num); //initiate command