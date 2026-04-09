$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git is not installed. Cài Git trước khi chạy script này."
    exit 1
}

$repoUrl = Read-Host "Enter GitHub repo URL (ví dụ: https://github.com/nhem0913/digital-profile.git)"
if (-not $repoUrl) {
    Write-Error "Bạn phải nhập GitHub repo URL."
    exit 1
}

git init

try {
    git config user.name "nhem0913"
    git config user.email "your-email@example.com"
} catch {
    # Ignore nếu config đã tồn tại
}

git add .
git commit -m "Initial commit"

$existingRemote = git remote
if (-not $existingRemote) {
    git remote add origin $repoUrl
}

git branch -M main
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Error "Đã xảy ra lỗi khi push code. Kiểm tra lại URL repo và quyền truy cập GitHub."
    exit 1
}

Write-Host "Code đã được đẩy lên GitHub thành công."
Write-Host "Tiếp theo: mở Railway, deploy dự án từ repo này."