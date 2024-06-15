function caesarCipher(str, shift) {
    shift = shift % 26;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charCode = str.charCodeAt(i);

        if (char.match(/[a-z]/i)) {
            if (charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}

function reverseCipher(str) {
    return str.split('').reverse().join('');
}