const form = document.getElementById("quizForm");
const resultBox = document.getElementById("resultBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;

  const selects = form.querySelectorAll("select");
  let score = 0;
  let index = 1;

  selects.forEach(sel => {
    const val = parseInt(sel.value);
    if (!isNaN(val)) {
      score += val;
    }
  });

  let feedback = "";
  if (score === 10) {
    feedback = "🚀 Perfect score! You're a cyber hygiene expert!";
  } else if (score >= 7) {
    feedback = "✅ Good job! Just a few areas to tighten.";
  } else if (score >= 4) {
    feedback = "⚠️ You’re doing okay, but there's room for improvement.";
  } else {
    feedback = "❌ Warning! Your cyber hygiene needs serious attention.";
  }

  resultBox.innerHTML = `
    <h3>Hi ${username}!</h3>
    <p>Your Cyber Hygiene Score: <strong>${score}/10</strong></p>
    <p>${feedback}</p>
  `;
});
