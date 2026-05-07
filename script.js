// a function that reverse a string 

function reverseString(str) {
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

// a function that counts the character of a string 

function countCharacters(str) {
    return str.length
}

// a function that capitalizes the first letter of each word in a sentence

function capitalize(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

// a function that find the minimum and the maximum values 


function maxAndMin(nums) {
    const max = nums.reduce((a, b) => a > b ? a : b )
    const min = nums.reduce((a, b) => a > b ? b : a )
    return `the max number is: ${max}, and the number ${min}`
}

// a function that returns the sum of array numbers

function sumOfArray(nums) {
    const sum = nums.reduce((acc, n) => acc + n, 0)
    return sum
}

// a function that filter odd and even numbers 

function filter(nums) {
    const evens = nums.filter(n => n % 2 == 0)
    const odds = nums.filter(n => n % 2 !== 0)
    return `the odd numbers are:${odds}, and the even numbers are: ${evens}`
}

// a function that calculates the factorial of a number

function factorial(num) {
    let result = 1;
    for(let i = 1; i <= num; i++ ) {
        result *= i
    }
    return result
}

// a function that checks if a number i prime or no 

function prime(n) {
    if(n < 2) return false
    for(let i = 2; i < Math.sqrt(n); i++) {
        if(n % i === 0) return false
    }
    return true
}

// a function that return the fibonacci sequence up to a given number 

function fibonacci(n) {
    const fibSequence = n => {
        if (n <= 0) return [];
        if (n === 1) return [0];

        const seq = [0, 1];
        for (let i = 2; i < n; i++) {
            seq.push(seq[i - 1] + seq[i - 2]);
        }
        return seq;
        };
}

