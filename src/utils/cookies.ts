// src/utils/cookies.ts
import Cookies from 'js-cookie';
import { encryptToken, decryptToken } from './crypto';

export const setToken = (token: string) => {
    const encryptedToken = encryptToken(token);
    Cookies.set('token', encryptedToken, { expires: 7 }); // Set token with a 7-day expiration
};

export const getToken = () => {
    const encryptedToken = Cookies.get('token');
    return encryptedToken ? decryptToken(encryptedToken) : '';
};

export const deleteToken = () => {
    Cookies.remove('token');
};
