// proxy.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text(); // Ollama streams text; we just capture it all
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to Ollama");
  }
});

app.listen(3000, () => console.log("✅ Proxy running at http://localhost:3000"));
