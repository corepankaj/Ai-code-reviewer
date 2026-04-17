import {useState } from "react";
import Editor from "@monaco-editor/react";
//const Editor = lazy(()=> import("@monaco-editor/react"));
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [code, setCode] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Code validation
  const isCode = (text) => {
    return (
      text.includes("{") ||
      text.includes("}") ||
      text.includes(";") ||
      text.includes("function") ||
      text.includes("def ") ||
      text.includes("<html") ||
      text.includes("class ") ||
      text.includes("console.log") ||
      text.includes("<?php")
    );
  };

  const valid = isCode(code);

  const handleSend = async () => {
    if (!valid) return;

    setLoading(true);

    const newMessages = [...messages, { role: "user", content: code }];
    setMessages(newMessages);

    setMessages((prev) => [...prev, { role: "ai", content: "" }]);

    const res = await fetch("http://localhost:5000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let aiText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      aiText += decoder.decode(value);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = aiText;
        return updated;
      });
    }

    setLoading(false);
    setCode("");
  };

  return (
    <div>
      <Header/>
    <div className="flex h-screen bg-gray-900 text-white">
      

      {/* LEFT: Editor */}
      <div className="w-1/2 border-r border-gray-700 h-full">
      
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(val) => setCode(val || "")}
        />
      </div>

      {/* RIGHT: Chat */}
      <div className="w-1/2 flex flex-col">

        {/* Messages */}
        <div className="h-[calc(100vh-150px)] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-gray-800"
                }`}
              >
                <pre className="whitespace-pre-wrap text-sm">
                  {msg.content}
                </pre>
              </div>
            </div>
          ))}

          {/* 🔥 Loader */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 px-4 py-2 rounded-lg animate-pulse">
                PRS AI Agent is thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="p-4 border-t border-gray-700">

          {/* Validation Message */}
          {!valid && code && (
            <p className="text-red-400 text-sm mb-2">
              Please enter valid code only
            </p>
          )}

          {/* ✅ Button */}
          <button
            onClick={handleSend}
            disabled={!valid || loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              valid && !loading
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            {loading ? "Processing..." : "Review Your Code With AI"}
          </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );

}

export default App;