import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useGemini = (prompt: string) => {
  const API_KEY = process.env.GEMINI_API_KEY || "";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchGeminiText = async () => {
    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const geminiText = response.text();
      setText(geminiText);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { text, loading, error, fetchGeminiText };
};

export default useGemini;
