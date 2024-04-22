# Encryption and Decryption Functions

## generateRandomKey Function:

1. Define a function called `generateRandomKey` that takes a `keyLength` parameter.
2. Create a string variable `allCharacters` containing all possible characters for the key.
3. Initialize an empty string `randomKey` to store the generated key.
4. Generate a random key by selecting characters from `allCharacters` using the Fisher-Yates shuffle algorithm, limited to the specified `keyLength`.
5. Return the `randomKey`.

---

## encryptText Function:

1. Define a function called `encryptText` that takes a plaintext string as input.
2. Generate a random encryption key using `generateRandomKey(30)` function (key length set to 30).
3. Check if the input text or key is empty, throw an error if so.
4. Initialize an empty string `encryptedText` to store the encrypted text.
5. Convert the generated key into an array of Unicode values (`keyValues`).
6. Iterate over each character in the plaintext:
   - Perform modular addition between the character's Unicode value and the corresponding key character's Unicode value (`charCode = char.charCodeAt(0) + keyValues[index % key.length]`).
   - Append the resulting character to `encryptedText`.
7. Return an object containing the `encryptedText` and the generated encryption key (`keyA`).

---

## decryptText Function:

1. Define a function called `decryptText` that takes an encrypted text and a decryption key as inputs.
2. Check if the input encrypted text or key is empty, throw an error if so.
3. Initialize an empty string `decryptedText` to store the decrypted text.
4. Convert the decryption key into an array of Unicode values (`keyValues`).
5. Iterate over each character in the encrypted text:
   - Perform modular subtraction between the character's Unicode value and the corresponding key character's Unicode value (`charCode = char.charCodeAt(0) - keyValues[index % key.length]`).
   - Append the resulting character to `decryptedText`.
6. Return the `decryptedText`.

---

## Usage:

1. Generate a random key using `generateRandomKey` function.
2. Encrypt a plaintext using `encryptText` function, which returns an object containing the encrypted text and the key used for encryption (`keyA`).
3. Decrypt the encrypted text using `decryptText` function and the key obtained from encryption (`keyA`), which returns the decrypted text.

---
