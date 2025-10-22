"""
Vulnerable Python Configuration - FOR TESTING PURPOSES ONLY
This file contains hardcoded credentials to test SonarQube secret detection
"""

# VULNERABILITY: Hardcoded database credentials
DB_PASSWORD = "SuperSecret123!"
DB_CONNECTION_STRING = "mysql://admin:admin123@localhost:3306/testdb"
POSTGRES_URL = "postgresql://dbuser:dbpass123@localhost/mydb"

# VULNERABILITY: Hardcoded API keys
API_KEY = "sk_1234567890abcdefghijklmnop"
STRIPE_API_KEY = "sk_live_51234567890abcdefghijklmnop"
OPENAI_API_KEY = "sk-1234567890abcdefghijklmnopqrstuvwxyz"

# VULNERABILITY: Hardcoded AWS credentials
AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
AWS_CONNECTION = {
    "access_key": "AKIAIOSFODNN7EXAMPLE",
    "secret_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "region": "us-east-1"
}

# VULNERABILITY: Hardcoded GitHub token
GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"
GITHUB_API_URL = f"https://{GITHUB_TOKEN}@github.com/user/repo.git"

# VULNERABILITY: Hardcoded Slack webhook
SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX"
SLACK_BOT_TOKEN = "xoxb-1234567890-1234567890-abcdefghijklmnopqrstuvwx"

# VULNERABILITY: Hardcoded MongoDB credentials
MONGODB_URI = "mongodb://admin:password123@localhost:27017/mydb"
MONGO_CONNECTION = {
    "host": "localhost",
    "port": 27017,
    "username": "admin",
    "password": "password123",
    "database": "mydb"
}

# VULNERABILITY: Hardcoded Redis credentials
REDIS_PASSWORD = "weak_redis_password"
REDIS_URL = "redis://:weak_redis_password@localhost:6379/0"

# VULNERABILITY: Hardcoded Docker credentials
DOCKER_USERNAME = "myuser"
DOCKER_PASSWORD = "MyDockerPassword123"
DOCKER_REGISTRY = "registry.example.com"

# VULNERABILITY: Hardcoded NPM token
NPM_TOKEN = "npm_1234567890abcdefghijklmnopqrstuvwxyz"

# VULNERABILITY: Hardcoded JWT secret
JWT_SECRET = "super-secret-jwt-key-12345"
JWT_PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...\n-----END RSA PRIVATE KEY-----"

# VULNERABILITY: Hardcoded encryption keys
ENCRYPTION_KEY = "aes256-encryption-key-secret"
SECRET_KEY = "django-insecure-secret-key-123456789"

# VULNERABILITY: Hardcoded Twilio credentials
TWILIO_ACCOUNT_SID = "AC1234567890abcdefghijklmnopqrstuv"
TWILIO_AUTH_TOKEN = "1234567890abcdefghijklmnopqrstuv"

# VULNERABILITY: Hardcoded SendGrid API key
SENDGRID_API_KEY = "SG.1234567890abcdefghijklmnop.1234567890abcdefghijklmnopqrstuvwxyz"

# VULNERABILITY: Hardcoded Firebase credentials
FIREBASE_API_KEY = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe"

# VULNERABILITY: Function using hardcoded credentials
def connect_to_database():
    """Connect to database with hardcoded password"""
    import mysql.connector
    connection = mysql.connector.connect(
        host="localhost",
        user="admin",
        password="admin123",  # Hardcoded password
        database="testdb"
    )
    return connection

# VULNERABILITY: Logging credentials
def log_connection_info():
    """Logging sensitive information"""
    print(f"Connecting with password: {DB_PASSWORD}")
    print(f"AWS Secret Key: {AWS_SECRET_KEY}")

