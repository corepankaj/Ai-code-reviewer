# 🤖 AI Code Reviewer (React + Node + Express + Google Gemini API)

An AI-powered Code Reviewer Web App that analyzes your code, suggests improvements, detects bugs, and provides best practices using **Google Gemini AI**.

---

## 🚀 Features

* 🔍 AI-based Code Review
* 🐞 Bug Detection & Fix Suggestions
* ⚡ Real-time Code Analysis
* 📊 Clean UI with React.js
* 🔐 Secure API Handling (Backend)
* 💡 Best Practices & Optimization Tips
* 🌐 Supports Multiple Programming Languages

---

## 🛠️ Tech Stack

### Frontend

* React.js
* fetch API 
* Tailwind CSS / Bootstrap (optional)

### Backend

* Node.js
* Express.js

### AI Integration

* Google Gemini API (Generative AI)

---

## 📁 Project Structure

```
AI-Code-Reviewer/
│
├── client/               # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/               # Node + Express Backend
│   ├── index.js
│     
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/corepankaj/Ai-code-reviewer.git
cd ai-code-reviewer
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🔑 Google Gemini API Setup

1. Go to Google AI Studio
2. Generate API Key
3. Add it to `.env` file

---

## 📡 API Endpoint

### POST `/api/review`

#### Request:

```json
{
  "code": "your code here"
}
```

#### Response:

```json
{
  "review": "AI generated suggestions and improvements"
}
```

---

## 💻 Example Usage

1. Paste your code in the editor
2. Click **Review Code**
3. Get instant AI feedback

---

## 🧠 Sample Prompt (Backend)

```js
const prompt = `
Review the following code and provide:
- Bugs
- Improvements
- Optimization tips
- Clean code suggestions

Code:
${userCode}
`;
```

---

## 📸 UI Preview
<img width="3773" height="1701" alt="image" src="https://github.com/user-attachments/assets/8b38d624-2903-4a8b-8ba6-d9fab4d8c37d" />

<img width="3717" height="1705" alt="image" src="https://github.com/user-attachments/assets/a3b7b01d-286d-41a4-bcb8-1ab69b3893dc" />


* Code Editor
* Review Button
* Output Panel with Suggestions

---

## 🔒 Security Notes

* Never expose API keys in frontend
* Always use `.env` for sensitive data
* Enable CORS properly

---

## 📈 Future Improvements

* 🔥 Code Editor (Monaco Editor)
* 📂 File Upload Support
* 🧪 Test Case Generation
* 🗣️ Voice-based Code Review
* 🌍 Multi-language UI

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Pankaj Ranjan Sinha**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
