export function codeGenerator(): String {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
        const randomDigit = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomDigit);

    }

    return code;
}