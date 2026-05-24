@echo off
setlocal EnableExtensions EnableDelayedExpansion

cd /d "%~dp0"

set "HOST=127.0.0.1"
set "PORT=3000"
set "URL=http://%HOST%:%PORT%"

echo.
echo ==========================================
echo   Farzan Brutalist Portfolio Launcher
echo ==========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not available in PATH.
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm is not installed or not available in PATH.
  pause
  exit /b 1
)

if not exist "package.json" (
  echo [ERROR] package.json was not found.
  echo Make sure this file is inside the portfolio project folder.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Dependencies not found. Installing now...
  call npm install --legacy-peer-deps
  if errorlevel 1 (
    echo.
    echo [ERROR] Dependency install failed.
    pause
    exit /b 1
  )
)

set "PORT_PID="
for /f %%P in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "(Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess)"') do set "PORT_PID=%%P"

if defined PORT_PID (
  echo Port %PORT% is already in use by process !PORT_PID!.
  set /p "RESTART=Stop it and restart clean? [Y/N]: "
  if /i "!RESTART!"=="Y" (
    powershell -NoProfile -ExecutionPolicy Bypass -Command "Stop-Process -Id !PORT_PID! -Force"
    timeout /t 2 /nobreak >nul
  ) else (
    echo Leaving the existing server running.
    start "" "%URL%"
    pause
    exit /b 0
  )
)

if exist ".next" (
  echo Cleaning stale Next.js cache...
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Remove-Item -LiteralPath '.next' -Recurse -Force -ErrorAction SilentlyContinue"
)

echo Opening %URL% ...
start "" /min powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 5; Start-Process '%URL%'"

echo.
echo Starting development server on %URL%
echo Press Ctrl+C in this window to stop the project.
echo.

call npm run dev -- --hostname %HOST% --port %PORT%

endlocal
