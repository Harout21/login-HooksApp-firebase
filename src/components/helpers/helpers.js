export const encrypto = (key, value) => {
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr();
    return sessionStorage.setItem(key, cryptr.encrypt(value))
};

export const decryptCryptr = (key) => {
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr();
    const value = sessionStorage.getItem(key);
    return value ? cryptr.decrypt(value) : "";
};