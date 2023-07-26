import CryptoJS from "crypto-js"

const encrypt = (string: string): string => {
    const secretKey: string = process.env.SECRET_KEY as string

    return CryptoJS.AES.encrypt(string, secretKey).toString()
}

const decrypt = (string: string): string => {
    const secretKey: string = process.env.SECRET_KEY as string
    const bytes = CryptoJS.AES.decrypt(string, secretKey);

    return bytes.toString(CryptoJS.enc.Utf8)
}

const crypto = {
    encrypt: encrypt,
    decrypt: decrypt
}

export default crypto
