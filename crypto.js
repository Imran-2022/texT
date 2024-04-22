// generate random key : - 

function generateRandomKey() {
    const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    let randomKey = '';

    // Shuffle the characters array

    const shuffledCharacters = allCharacters.split('').sort(() => Math.random() - 0.5);

    // Generate a random key with a maximum length of 30 characters

    for (let i = 0; i < Math.min(30, shuffledCharacters.length); i++) {
        randomKey += shuffledCharacters[i];
    }

    return randomKey;
}


// Function to encrypt text using XOR cipher

function encryptText(text) {
    const key = generateRandomKey();
    if (!text || !key) {
        throw new Error("Text and key are required for encryption.");
    }

    var encryptedText = '';
    for (let i = 0; i < text.length; i++) {

        // Perform XOR operation between each character and the corresponding key character

        var charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        encryptedText += String.fromCharCode(charCode);
    }

    return { encryptedText, keyA:key };
}

// Function to decrypt text using XOR cipher

function decryptText(encryptedText,keyB) {
    if (!encryptedText || !keyB) {
        throw new Error("Encrypted text and key are required for decryption.");
    }

    var decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {

        // Perform XOR operation between each character and the corresponding key character

        var charCode = encryptedText.charCodeAt(i) ^ keyB.charCodeAt(i % keyB.length);
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}


// M⊕K = E , M= plain text, k=key, E=encrypted text
// E⊕K = D , E= encrypted text, k=key, D=decrypted Text.
