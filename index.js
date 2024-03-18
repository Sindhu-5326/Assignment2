//Vowel and cononents count
function count() {
    var inputString = document.getElementById("inputString").value.toLowerCase();
    var vowelCount = 0;
    var consonantCount = 0;
    var vowels = "aeiou";

    for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];
        if (char.match(/[a-z]/)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    var result = "Vowels: " + vowelCount + "<br>Consonants: " + consonantCount;
    document.getElementById("result").innerHTML = result;
}

// Palindrome checker
function checkPalindrome() {
    var inputNumbers = document.getElementById("inputNumbers").value;
    var cleanNumbers = inputNumbers.replace(/\s/g, ''); // Remove white spaces
    var isPalindrome = true;

    for (var i = 0; i < cleanNumbers.length / 2; i++) {
        if (cleanNumbers[i] !== cleanNumbers[cleanNumbers.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById("resultpal").innerHTML = "Yes, it's a palindrome!";
    } else {
        document.getElementById("resultpal").innerHTML = "No, it's not a palindrome.";
    }
}

// Tip Caluclator
document.getElementById('calculateBtn').addEventListener('click', function() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(subtotal) || isNaN(percentage)) {
        alert('Please enter valid values for Subtotal and Tip Percentage.');
        return;
    }

    const tipAmount = (subtotal * percentage) / 100;
    const totalAmount = subtotal + tipAmount;

    document.getElementById('totalAmount').innerHTML = `
        <h2>Total Amount</h2>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tip: $${tipAmount.toFixed(2)}</p>
        <p>Total: $${totalAmount.toFixed(2)}</p>
    `;
});
