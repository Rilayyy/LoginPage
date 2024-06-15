document.getElementById('loginbutton').addEventListener('click', login);

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username]) {
        const user = users[username];
        let encryptedPassword;
        switch (user.cipher) {
            case 'caesar':
                encryptedPassword = caesarCipher(password, 3);
                break;
            case 'reverse':
                encryptedPassword = reverseCipher(password);
                break;
            default:
                alert('Unknown cipher.');
                return;
        }

        if (encryptedPassword === user.password) {
            alert('Login successful!');
            window.location.href = 'welcom.html';
        } else {
            alert('Invalid password.');
        }
    } else {
        alert('Invalid username.');
    }
}

function showCipher() {
    const username = document.getElementById('username').value;
    const cipherTextElement = document.getElementById('cipher-text');

    if (users[username]) {
        const user = users[username];
        cipherTextElement.textContent = `Cipher: ${user.cipher}, Password: ${user.password}`;
        cipherTextElement.style.display = 'block';
    } else {
        cipherTextElement.style.display = 'none';
    }
}