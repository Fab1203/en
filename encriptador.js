document.addEventListener('DOMContentLoaded', function () {
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultadoInput = document.getElementById('resultado');
    const messageInput = document.getElementById('messageInput');

    encryptBtn.addEventListener('click', function () {
        const message = messageInput.value.toLowerCase().replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'aí').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        resultadoInput.value = message;
    });

    decryptBtn.addEventListener('click', function () {
        const message = messageInput.value.toLowerCase().replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/aí/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        resultadoInput.value = message;
    });

    copyBtn.addEventListener('click', function () {
        resultadoInput.select();
        document.execCommand('copy');
    });
});