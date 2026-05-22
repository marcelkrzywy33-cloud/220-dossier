window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const SECRET = "database access dossier 68235";

  function type(text, delay = 0) {
    setTimeout(() => {
      const line = document.createElement("div");

      let i = 0;
      const interval = setInterval(() => {
        line.textContent += text[i];
        i++;

        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 20);

      output.appendChild(line);

    }, delay);
  }

  function print(text, delay = 0) {
    setTimeout(() => {
      const line = document.createElement("div");
      line.textContent = text;
      output.appendChild(line);
    }, delay);
  }

  // 🧠 STARTUP SEQUENCE (THIS is where timing matters)
  type("TERMINAL BOOTING...", 0);
  type("CONNECTING TO SYSTEM...", 1200);
  type("ACCESS REQUIRED", 2400);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      print("> " + value);

      if (value === SECRET) {
        type("ACCESS GRANTED", 500);
        type("LOADING DOSSIER 68235...", 1500);
        type("████████████████████", 2500);
      } else {
        type("ACCESS DENIED", 500);
      }

      input.value = "";
    }
  });

};
