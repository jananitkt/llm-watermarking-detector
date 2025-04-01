import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

function analyzeWatermark(text) {
  const words = text.trim().split(/\s+/);
  let uppercaseTokens = 0;
  let evenLengthTokens = 0;

  words.forEach(token => {
    if (token === token.toUpperCase() && token.length > 3) uppercaseTokens++;
    if (token.length % 2 === 0) evenLengthTokens++;
  });

  const watermarkScore = (uppercaseTokens / words.length) * 100 + (evenLengthTokens / words.length) * 100;

  return {
    totalWords: words.length,
    uppercaseTokens,
    evenLengthTokens,
    watermarkScore: watermarkScore.toFixed(2),
    likelyAI: watermarkScore > 80 ? "High" : watermarkScore > 50 ? "Moderate" : "Low"
  };
}

app.post("/api/analyze", (req, res) => {
  const { inputText } = req.body;
  const result = analyzeWatermark(inputText);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🧠 Watermarking Detector running at http://localhost:${PORT}`);
});
