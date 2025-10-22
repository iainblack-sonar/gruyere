/**
 * Vulnerable JavaScript Configuration - FOR TESTING PURPOSES ONLY
 * This file contains hardcoded credentials to test SonarQube secret detection
 */

// VULNERABILITY: Hardcoded database credentials
const DB_PASSWORD = "SuperSecret123!";
const DB_CONNECTION_STRING = "mysql://admin:admin123@localhost:3306/testdb";
const POSTGRES_URL = "postgresql://dbuser:dbpass123@localhost/mydb";

// VULNERABILITY: Hardcoded API keys
const API_KEY = "sk_1234567890abcdefghijklmnop";
const STRIPE_API_KEY = "sk_live_51234567890abcdefghijklmnop";
const OPENAI_API_KEY = "sk-1234567890abcdefghijklmnopqrstuvwxyz";

// VULNERABILITY: Hardcoded AWS credentials
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const AWS_CONFIG = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1"
};

// VULNERABILITY: Hardcoded GitHub token
const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
const GITHUB_API_URL = `https://${GITHUB_TOKEN}@github.com/user/repo.git`;

// VULNERABILITY: Hardcoded Slack webhook
const SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX";
const SLACK_BOT_TOKEN = "xoxb-1234567890-1234567890-abcdefghijklmnopqrstuvwx";

// VULNERABILITY: Hardcoded MongoDB credentials
const MONGODB_URI = "mongodb://admin:password123@localhost:27017/mydb";
const MONGO_CONNECTION = {
    host: "localhost",
    port: 27017,
    username: "admin",
    password: "password123",
    database: "mydb"
};

// VULNERABILITY: Hardcoded Redis credentials
const REDIS_PASSWORD = "weak_redis_password";
const REDIS_URL = "redis://:weak_redis_password@localhost:6379/0";

// VULNERABILITY: Hardcoded Docker credentials
const DOCKER_USERNAME = "myuser";
const DOCKER_PASSWORD = "MyDockerPassword123";
const DOCKER_REGISTRY = "registry.example.com";

// VULNERABILITY: Hardcoded NPM token
const NPM_TOKEN = "npm_1234567890abcdefghijklmnopqrstuvwxyz";

// VULNERABILITY: Hardcoded JWT secret
const JWT_SECRET = "super-secret-jwt-key-12345";
const JWT_PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA...
-----END RSA PRIVATE KEY-----`;

// VULNERABILITY: Hardcoded encryption keys
const ENCRYPTION_KEY = "aes256-encryption-key-secret";
const SECRET_KEY = "express-session-secret-key-123456789";

// VULNERABILITY: Hardcoded Twilio credentials
const TWILIO_ACCOUNT_SID = "AC1234567890abcdefghijklmnopqrstuv";
const TWILIO_AUTH_TOKEN = "1234567890abcdefghijklmnopqrstuv";

// VULNERABILITY: Hardcoded SendGrid API key
const SENDGRID_API_KEY = "SG.1234567890abcdefghijklmnop.1234567890abcdefghijklmnopqrstuvwxyz";

// VULNERABILITY: Hardcoded Firebase credentials
const FIREBASE_API_KEY = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe",
    authDomain: "myapp.firebaseapp.com",
    projectId: "myapp-12345",
    storageBucket: "myapp.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};

// VULNERABILITY: Function using hardcoded credentials
function connectToDatabase() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'admin123', // Hardcoded password
        database: 'testdb'
    });
    return connection;
}

// VULNERABILITY: Axios with hardcoded token
async function fetchData() {
    const axios = require('axios');
    const response = await axios.get('https://api.example.com/data', {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'X-API-Key': 'sk_1234567890abcdefghijklmnop'
        }
    });
    return response.data;
}

// VULNERABILITY: Logging credentials
function logConnectionInfo() {
    console.log(`Connecting with password: ${DB_PASSWORD}`);
    console.log(`AWS Secret Key: ${AWS_SECRET_KEY}`);
}

module.exports = {
    DB_PASSWORD,
    API_KEY,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    GITHUB_TOKEN,
    MONGODB_URI,
    connectToDatabase
};

