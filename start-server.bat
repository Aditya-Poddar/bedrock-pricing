@echo off
echo ========================================
echo Amazon Bedrock Cost Calculator
echo Starting Local Web Server...
echo ========================================
echo.
echo Server will start on: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

python -m http.server 8000

pause
