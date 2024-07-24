import crypto from "crypto";

const SECRET_KEY = 'your-very-secure-secret-key'; // Replace with your actual secret key


export function createAuthToken(id: number, email: string) {
    return crypto.createHmac('sha256', SECRET_KEY).update(id + "-" + email).digest('hex');
}
