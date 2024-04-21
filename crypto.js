// Function to encrypt text

function encryptText(text) {

    // encryption logic here
    // For demonstration purposes, let's just log the encrypted text
    
    var encryptedText = text.toUpperCase(); // Dummy encryption
    var keyA = text.split('').reverse().join(''); // Dummy key

    return { encryptedText,keyA };
}

// Function to decrypt text

function decryptText(encryptedText) {

    // decryption logic here

    var decryptedText = encryptedText.toLowerCase(); // Dummy decryption

    return decryptedText;
}
