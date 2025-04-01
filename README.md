
# 🧠 LLM Watermarking Detector

This project helps identify AI-generated text using token-level watermark analysis techniques. Built by **Janani Thamilarasu** as part of her AI safety portfolio.

---

## 🔐 What is Watermarking in LLMs?

Watermarking is the idea of subtly encoding hidden patterns into LLM-generated text — like token length consistency, uppercase styling, or punctuation rhythm — to detect its source.

This tool demonstrates one such simplified watermark analysis.

---

## 🎯 Project Purpose

- Detect likely AI-generated text by analyzing patterns
- Empower users and researchers to evaluate text source reliability
- Raise awareness around misinformation and AI-generated content

---

## 🚀 How It Works

1. Paste any paragraph or document text
2. Click "Analyze Watermark"
3. The system checks for:
   - Uppercase word frequency
   - Even-length token density
4. It then calculates a watermark score and classifies likelihood:
   - **Low** – likely human-authored
   - **Moderate** – mixed or borderline
   - **High** – possibly AI-generated

---

## 🧪 Sample Test Data

### ✅ 1. Likely AI-Generated
```text
THIS TEXT IS CLEAN, FORMAL, STRUCTURED. EACH WORD HAS PATTERNS THAT ARE PREDICTABLE.
```
- Result: High Watermark Score  
- Reason: Uniform structure and uppercase signal AI-style formatting

---

### ✍️ 2. Likely Human
```text
I missed the morning bus, so I had to take a cab. It rained the entire evening, and the roads were flooded.
```
- Result: Low Watermark Score  
- Reason: Natural flow, varying word length, lowercase usage

---

### 🧪 3. Mixed
```text
The MODEL GENERATED this PART and I ADDED a few LINES MYSELF to test detection.
```
- Result: Moderate Watermark Score  
- Reason: Blend of uppercase and natural human rhythm

---

## 🧰 Tech Stack

- HTML + Bootstrap
- JavaScript
- Node.js + Express

---

## 📁 Folder Structure

```
llm-watermarking-detector/
├── .gitignore
├── server.mjs
├── package.json
├── public/
│   ├── index.html
│   └── script.js
└── README.md
```

---

## 🧠 Educational Goals

- Learn how AI outputs can carry detectable patterns
- Explore responsible AI development and safety tools
- Build foundational research projects in AI detection

---

Built with ❤️ by [Janani Thamilarasu](https://github.com/jananitkt)
