const input = document.getElementById("input");
const output = document.getElementById("output");

const SECRET = "database access dossier 68235";

function typeText(text, speed = 20) {
  let i = 0;

  const line = document.createElement("div");
  output.appendChild(line);

  const interval = setInterval(() => {
    line.innerHTML += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      line.innerHTML += "\n";
    }
  }, speed);
}

function instant(text) {
  output.innerHTML += text + "\n";
}

// startup text
typeText("TERMINAL ONLINE", 30);
typeText("ENTER COMMAND", 30);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim().toLowerCase();

    instant("> " + value);

    if (value === SECRET) {
      typeText("ACCESS GRANTED", 40);
      typeText("LOADING DOSSIER...", 40);
      typeText("████████████████", 40);
    } else {
      typeText("ACCESS DENIED", 40);
    }

    input.value = "";
  }
});
