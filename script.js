window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const SECRET = "database access dossier 68235";

  // ⏱ WAIT FUNCTION (this is what you wanted)
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ✍️ typing effect
  function type(text) {
    return new Promise(resolve => {
      const line = document.createElement("div");
      output.appendChild(line);

      let i = 0;
      const interval = setInterval(() => {
        line.textContent += text[i];
        i++;

        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, 20);
    });
  }

  function print(text) {
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);
  }

  // 🚀 START SEQUENCE (NOW WITH REAL WAITS)
  async function boot() {
    await type("TERMINAL BOOTING...");
    await wait(2000);

    await type("CONNECTING TO SYSTEM...");
    await wait(2000);

    await type("ACCESS REQUIRED");
  }

  boot();

  input.addEventListener("keydown", async function (e) {
    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      print("> " + value);

      if (value === SECRET) {
        await type("ACCESS GRANTED");
        await wait(2000);

        await type("LOADING DOSSIER 68235...");
        await wait(2000);

        await type("████████████████████");
      } else {
        await type("ACCESS DENIED");
      }

      input.value = "";
    }
  });

};
