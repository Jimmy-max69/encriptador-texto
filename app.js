document.getElementById("encryptButton").addEventListener("click", function () {
    let inputText = document.getElementById("input_text").value;
    let encryptedText = encrypt(inputText);
    document.getElementById("output_text").value = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    let inputText = document.getElementById("input_text").value;
    let decryptedText = decrypt(inputText);
    document.getElementById("output_text").value = decryptedText;
});

document.getElementById("copyButton").addEventListener("click", function () {
    const outputText = document.getElementById("output_text").value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
});

function encrypt(text) {
    let encryptedText = text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

function copytext() { 
    const outputText = document.getElementById("output_text");
    const inputText = document.getElementById("input_text");
    inputText.value = outputText.value;
    outputText.value = "";
    inputText.Selected();
    document.execCommand("copy")

}