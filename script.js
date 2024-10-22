function encryptMessage() {
    try {
        let message = document.getElementById('inputMessage').value;
        let encrypted = btoa(message);
        document.getElementById('outputMessage').value = encrypted;
    } catch (error) {
        document.getElementById('outputMessage').value = "خطأ في التشفير: " + error.message;
    }
}

function decryptMessage() {
    try {
        let encrypted = document.getElementById('outputMessage').value;
        let decrypted = atob(encrypted);
        document.getElementById('inputMessage').value = decrypted;
    } catch (error) {
        document.getElementById('inputMessage').value = "خطأ في فك التشفير: " + error.message;
    }
}

function encryptArabicMessage() {
    let message = document.getElementById('inputMessage').value;
    if (message === "سلام عليكم") {
        document.getElementById('outputMessage').value = "هلا";
    } else {
        document.getElementById('outputMessage').value = "كلمة غير معروفة";
    }
}

function decryptArabicMessage() {
    let encrypted = document.getElementById('outputMessage').value;
    if (encrypted === "هلا") {
        document.getElementById('inputMessage').value = "سلام عليكم";
    } else {
        document.getElementById('inputMessage').value = "كلمة غير معروفة";
    }
}