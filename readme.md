#### #Encryption and Decryption Functions

#### `generateRandomKey` Function
- Generates a random key of specified length.
- Uses the Fisher-Yates shuffle to randomly select characters from `allCharacters`.

#### `encryptText` Function
- Takes plaintext and generates a random key (`generateRandomKey(30)`).
- Throws an error if input text or key is empty.
- Encrypts text by adding Unicode values of the plaintext and key characters.
- Returns an object containing `encryptedText` and the encryption key (`keyA`).

#### `decryptText` Function
- Takes encrypted text and the decryption key (`keyA`).
- Throws an error if input text or key is empty.
- Decrypts by subtracting the Unicode values of the encrypted text and key characters.
- Returns the `decryptedText`.

#### Usage:
1. Use `generateRandomKey` to create a key.
2. Use `encryptText` to encrypt and get both encrypted text and key.
3. Use `decryptText` with the encrypted text and key to retrieve the original text.
