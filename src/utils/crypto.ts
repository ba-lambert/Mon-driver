// src/utils/encryption.ts
import CryptoJS from 'crypto-js';

const secretKey = 'mySecretKey12345'; // Ensure a secure key and proper encoding

export const encryptToken = (token: string) => {
    const ciphertext = CryptoJS.AES.encrypt(token, secretKey).toString();
    return ciphertext;
};

export const decryptToken = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};
