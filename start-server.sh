#!/bin/bash

echo "========================================"
echo "Amazon Bedrock Cost Calculator"
echo "Starting Local Web Server..."
echo "========================================"
echo ""
echo "Server will start on: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "Error: Python is not installed!"
    echo "Please install Python from https://www.python.org/downloads/"
    exit 1
fi
