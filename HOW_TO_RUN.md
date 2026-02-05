# How to Run the Amazon Bedrock Cost Calculator

## The Problem
When you open `index.html` directly in your browser (by double-clicking it), the JavaScript modules won't work due to CORS (Cross-Origin Resource Sharing) security restrictions. Modern browsers block ES6 modules when using the `file://` protocol.

## The Solution
You need to run a local web server. Here are several easy methods:

### Method 1: Python (Recommended - Works on Windows, Mac, Linux)

**If you have Python 3 installed:**
```bash
# Navigate to the project folder in terminal/command prompt
cd path/to/project

# Start the server
python -m http.server 8000
```

Then open your browser and go to: **http://localhost:8000**

---

### Method 2: Node.js (If you have Node.js installed)

**Install http-server globally (one-time setup):**
```bash
npm install -g http-server
```

**Run the server:**
```bash
# Navigate to the project folder
cd path/to/project

# Start the server
http-server -p 8000
```

Then open your browser and go to: **http://localhost:8000**

---

### Method 3: PHP (If you have PHP installed)

```bash
# Navigate to the project folder
cd path/to/project

# Start the server
php -S localhost:8000
```

Then open your browser and go to: **http://localhost:8000**

---

### Method 4: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

The page will automatically open in your browser!

---

### Method 5: Use a Simple Web Server App

**For Windows:**
- Download and install [Fenix Web Server](https://fenixwebserver.com/)
- Point it to your project folder
- Click "Start"

**For Mac:**
- Use the built-in Apache server or install MAMP

---

## Quick Start (Current Session)

A Python server is currently running on port 8000. Simply open:
**http://localhost:8000**

To stop the server, press `Ctrl+C` in the terminal where it's running.

---

## Troubleshooting

### Issue: "Module not found" or blank page
**Solution:** Make sure you're accessing via `http://localhost:8000` and NOT by opening the file directly.

### Issue: Port 8000 is already in use
**Solution:** Use a different port:
```bash
python -m http.server 8080
```
Then access: http://localhost:8080

### Issue: Python not found
**Solution:** Install Python from [python.org](https://www.python.org/downloads/)

---

## Features of the Modernized UI

✨ **Glassmorphism Design** - Frosted glass effects throughout
🎨 **Modern Gradients** - Beautiful color transitions
🌓 **Dark/Light Theme** - Toggle with the button in bottom-right
💫 **Smooth Animations** - Delightful micro-interactions
📱 **Fully Responsive** - Works on all devices
🎯 **Enhanced UX** - Better visual feedback and interactions

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ Internet Explorer (not supported - use Edge instead)

---

## Need Help?

If you're still having issues:
1. Check the browser console (F12) for error messages
2. Ensure all files are in the correct folders
3. Try a different browser
4. Clear your browser cache (Ctrl+Shift+Delete)

Enjoy the modern, sparkling UI! 🚀
