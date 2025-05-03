# QR Code Generator 🧾➡️📱

A simple Node.js + Express.js mini project that allows users to input a URL and generate a QR code from it. The QR code is displayed on the page using the `qrcode` npm package.

## 🔧 Tech Stack
- Node.js
- Express.js
- EJS (templating)
- Bootstrap (frontend styling)
- `qrcode` npm package

## 📁 Folder Structure
```
Project4/
├── public/              # Static assets like CSS
├── routes/              # Route handlers (e.g., generate.js)
├── views/               # EJS templates (frontend UI)
├── app.js               # Main Express app configuration
├── index.js             # Entry point (optional in your setup)
├── package.json         # Project metadata & dependencies
```

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/Faizan1450/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Open your browser:
   ```
   http://localhost:3000/
   ```

## ✨ Features
- Validate user-entered URLs
- Generate QR code on button click
- Refill input field after generation
- Responsive Bootstrap form

## 📦 Dependencies
```bash
express
qrcode
ejs
```

## 📜 License
This project is for educational/demo purposes only. Feel free to fork and improve!