async function analyze() {
  const inputText = document.getElementById("inputText").value;
  const res = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputText })
  });

  const data = await res.json();
  document.getElementById("resultBox").classList.remove("d-none");
  document.getElementById("wordCount").innerText = data.totalWords;
  document.getElementById("upperCount").innerText = data.uppercaseTokens;
  document.getElementById("evenCount").innerText = data.evenLengthTokens;
  document.getElementById("wmScore").innerText = data.watermarkScore;
  document.getElementById("aiLikelihood").innerText = data.likelyAI;
}
