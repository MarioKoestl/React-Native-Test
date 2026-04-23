
export const AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE';
export const AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
const DB_PASSWORD = 'SuperGeheimesPasswort123!';


const GITHUB_TOKEN = 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1234';


export const dbConfig = {
    host: 'prod-db.example.com',
    port: 5432,
    user: 'admin',
    password: DB_PASSWORD,     // BAD: hardcoded credential
    apiKey: API_KEY,           // BAD: hardcoded secret
};


export function getAuthHeader() {
    const username = 'admin';
    const password = 'admin123';   // BAD: hardcoded password
    const token = btoa(username + ':' + password);
    return 'Basic ' + token;
}
