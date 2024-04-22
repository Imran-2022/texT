// Define text variable globally to access it in other scripts

var text = "";
var decryptTexT="";
// Add event listener to the Encrypt button

document.getElementById("encrypt").addEventListener("click", () => {

    // Get the text from the first textarea

    text = document.getElementById("message1").value;

    // Call the encryptText function from crypto.js with the text parameter
    const {encryptedText,keyA}=encryptText(text);

    document.getElementById("message2").value = encryptedText;
    decryptTexT=encryptedText;
    document.getElementById("key1").value =keyA;
});

// Add event listener to the Decrypt button

document.getElementById("decrypt").addEventListener("click", () => {

    // Get the encrypted text from the second textarea

    var encryptedText = decryptTexT;

    // Get KeyA and KeyB values
    var keyA = document.getElementById("key1").value;
    var keyB = document.getElementById("key2").value;
    // Check if KeyA is equal to KeyB

    if (keyA === keyB) {

        // Call the decryptText function from crypto.js with the encrypted text parameter
        document.getElementById("message2").value =decryptText(encryptedText,keyB);
        
    } else {

        console.log("KeyA and KeyB are not equal. Cannot decrypt.");

        // show an error message or handle the situation as needed !!

    }
});
