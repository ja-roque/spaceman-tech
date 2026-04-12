#!/bin/bash
set -e

echo "==> Deploying spacemantech.ai..."

ssh -i ~/.ssh/id_ed25519 root@104.236.105.252 << 'ENDSSH'
  cd /var/www/spaceman-tech
  echo "==> Pulling latest code..."
  git pull origin main
  echo "==> Building..."
  npm run build
  echo "==> Restarting..."
  pm2 restart spaceman-tech
  echo "==> Done!"
ENDSSH

echo "==> spacemantech.ai is live."
