## Function Definitions

## generateRandomKey Function:

1. Define a function called `generateRandomKey`.
2. Create a string variable `allCharacters` containing all possible characters for the key.
3. Initialize an empty string `randomKey` to store the generated key.
4. Shuffle the characters in `allCharacters` using a Fisher-Yates shuffle algorithm.
5. Generate a random key by selecting characters from the shuffled array, limited to a maximum length of 30 characters.
6. Return the `randomKey`.

---

## encryptText Function:

1. Define a function called `encryptText` that takes a plaintext string as input.
2. Generate a random encryption key using `generateRandomKey` function.
3. Check if the input text or key is empty, throw an error if so.
4. Initialize an empty string `encryptedText` to store the encrypted text.
5. Iterate over each character in the plaintext:
   - Perform XOR operation between the character and the corresponding key character.
   - Append the result of XOR operation to `encryptedText`.
6. Return an object containing the `encryptedText` and the generated key (`keyA`).

---

## decryptText Function:

1. Define a function called `decryptText` that takes an encrypted text and a decryption key as inputs.
2. Check if the input encrypted text or key is empty, throw an error if so.
3. Initialize an empty string `decryptedText` to store the decrypted text.
4. Iterate over each character in the encrypted text:
   - Perform XOR operation between the character and the corresponding key character.
   - Append the result of XOR operation to `decryptedText`.
5. Return the `decryptedText`.

---

## Usage:

1. Generate a random key using `generateRandomKey` function.
2. Encrypt a plaintext using `encryptText` function, which returns an object containing the encrypted text and the key used for encryption (`keyA`).
3. Decrypt the encrypted text using `decryptText` function and the key obtained from encryption (`keyA`), which returns the decrypted text.
