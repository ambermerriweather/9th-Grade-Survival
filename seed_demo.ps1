# Scholar Vanguard - Seed Demo Classroom
# Usage: .\seed_demo.ps1 -Code ABC123
# Merges 9 realistic demo students into the given class (does not delete existing students).
param([Parameter(Mandatory=$true)][string]$Code)

$db = "https://scholars-vanguard-default-rtdb.firebaseio.com"
$Code = $Code.ToUpper()

# Ensure the class exists
$info = Invoke-RestMethod -Uri "$db/sv_classrooms/$Code/info.json" -Method Get
if ($null -eq $info) {
    Write-Host "Class $Code not found. Creating it..." -ForegroundColor Yellow
    $infoBody = @{ teacherName = "Ms. Merriweather"; createdAt = (Get-Date).ToUniversalTime().ToString("o"); classCode = $Code } | ConvertTo-Json
    Invoke-RestMethod -Uri "$db/sv_classrooms/$Code/info.json" -Method Put -Body $infoBody -ContentType "application/json" | Out-Null
}

# PATCH merges students in without touching existing ones
$students = Get-Content "$PSScriptRoot\seed_demo.json" -Raw -Encoding UTF8
Invoke-RestMethod -Uri "$db/sv_classrooms/$Code/students.json" -Method Patch -Body $students -ContentType "application/json" | Out-Null

Write-Host "DONE - 9 demo students seeded into class $Code" -ForegroundColor Green
Write-Host "Open the Teacher Hub > My Classroom and click Refresh Roster." -ForegroundColor Cyan
