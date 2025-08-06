document.getElementById("hygieneForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const passwordChange = parseInt(document.getElementById("passwordChange").value);
  const twoFA = document.getElementById("twoFA").value;

  let score = 0;
  if (passwordChange <= 30) score += 1;
  if (twoFA === "yes") score += 1;

  document.getElementById("result").innerText = 
    `${username}, your Cyber Hygiene Score is: ${score}/2`;
});
