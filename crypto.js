// Function to generate a random key

function generateRandomKey(keyLength) {

    const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    let randomKey = '';

    for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        randomKey += allCharacters[randomIndex];
    }

    return randomKey;
}

// Function to encrypt text using modular addition

function encryptText(text) {

    const key = generateRandomKey(30);

    if (!text || !key) {
        throw new Error("Text and key are required for encryption.");
    }

    const keyValues = key.split('').map(char => char.charCodeAt(0));

    const encryptedText = text.split('').map((char, index) => {

        const charCode = char.charCodeAt(0) + keyValues[index % key.length];
        return String.fromCharCode(charCode);

    }).join('');

    return { encryptedText, keyA:key };

}

// Function to decrypt text using modular subtraction

function decryptText(encryptedText, key) {

    if (!encryptedText || !key) {
        throw new Error("Encrypted text and key are required for decryption.");
    }

    const keyValues = key.split('').map(char => char.charCodeAt(0));

    const decryptedText = encryptedText.split('').map((char, index) => {

        const charCode = char.charCodeAt(0) - keyValues[index % key.length];
        return String.fromCharCode(charCode);
        
    }).join('');

    return decryptedText;
    
}