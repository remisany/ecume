import CryptoES from 'crypto-es';

const encrypt = (string: string): string => {
    const secretKey: string = process.env.EXPO_PUBLIC_SECRET_KEY as string

    return CryptoES.AES.encrypt(string, secretKey).toString()
}

export default encrypt
