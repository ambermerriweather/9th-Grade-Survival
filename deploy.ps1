# Scholar Vanguard Deploy Script
# Usage: .\deploy.ps1 "commit message"
param([string]$msg = "Update Scholar Vanguard app")

Set-Location $PSScriptRoot

Write-Host "Copying standalone.html to index.html..." -ForegroundColor Cyan
Copy-Item "standalone.html" "index.html" -Force

Write-Host "Staging changes..." -ForegroundColor Cyan
git add -A

Write-Host "Committing: $msg" -ForegroundColor Cyan
git commit -m $msg

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "Deploying to Netlify..." -ForegroundColor Cyan
netlify deploy --prod --dir . --message $msg

Write-Host ""
Write-Host "DONE - Live at https://scholar-vanguard-hub.netlify.app" -ForegroundColor Green
