// Function to encrypt text

function encryptText(text) {

    // encryption logic here
    // For demonstration purposes, let's just log the encrypted text
    
    var encryptedText = text.toUpperCase(); // Dummy encryption

    document.getElementById("message2").value = encryptedText;

    // Generate KeyA (reverse the text)

    var keyA = text.split('').reverse().join('');
    document.getElementById("key1").value = keyA; // Set KeyA value in the input field

}

// Function to decrypt text

function decryptText(encryptedText) {

    // implement  decryption logic here
    // For demonstration purposes, let's just log the decrypted text

    var decryptedText = encryptedText.toLowerCase(); // Dummy decryption
    console.log("Decrypted text:", decryptedText);

    // Show half of the decrypted text in lowercase.

    var halfDecryptedText = decryptedText.toLowerCase();
    document.getElementById("message2").value = halfDecryptedText;
    
}
