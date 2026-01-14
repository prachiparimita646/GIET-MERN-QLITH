// 1. Palindrome String
function checkPalindrome() {
    let s = document.getElementById("palindromeInput").value;
    let rev = s.split("").reverse().join("");
    document.getElementById("palindromeResult").innerText =
        (s === rev) ? "Output: 1 (Palindrome)" : "Output: 0 (Not Palindrome)";
}

// 2. Capitalize First Letter of Each Word
function capitalizeWords() {
    let str = document.getElementById("capitalizeInput").value;
    let words = str.split(" ");
    let result = "";

    for (let word of words) {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }

    document.getElementById("capitalizeResult").innerText = result.trim();
}

// 3. Find Length of String
function findLength() {
    let str = document.getElementById("lengthInput").value;
    let count = 0;

    for (let ch of str) {
        count++;
    }

    document.getElementById("lengthResult").innerText = "Length: " + count;
}

// 4. Convert to Uppercase without toUpperCase()
function convertUpper() {
    let str = document.getElementById("upperInput").value;
    let result = "";

    for (let ch of str) {
        let code = ch.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += ch;
        }
    }

    document.getElementById("upperResult").innerText = result;
}

// 5. Count Vowels
function countVowels() {
    let str = document.getElementById("vowelInput").value;
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    document.getElementById("vowelResult").innerText = "Vowels: " + count;
}

// 6. Arrow Function to Multiply Two Numbers
const multiply = (a, b) => a * b;

function multiplyNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("multiplyResult").innerText =
        "Result: " + multiply(a, b);
}