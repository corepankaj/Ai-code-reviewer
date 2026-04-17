import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/review", async (req, res) => {
  try {
    const { code } = req.body;

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    const stream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",

      systemInstruction: `
        You are a strict senior software engineer.
        Rules:
        - Detect language
        - Mention language like: Language: JavaScript
        - Provide optimized code block
        - Keep response short
        `,

      contents: `Review the following code:\n${code}`,
    });

    // ✅ FIX: use "stream"
    for await (const chunk of stream) {
      const text =chunk.text || chunk.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        res.write(text); 
      }
    }

    res.end(); // end response

  } catch (error) {
    console.error(error);
    res.status(500).end("AI error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});