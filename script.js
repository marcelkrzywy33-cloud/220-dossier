window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  input.disabled = true;
  input.style.display = "none";

  const SECRET = "load personnel database";

  let mode = "high command";

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  async function activatePrompt() {

    const prompt = document.querySelector(".input-line span");

    input.style.display = "block";

    for (let i = 0; i < 6; i++) {

      prompt.style.visibility = "hidden";
      await wait(120);

      prompt.style.visibility = "visible";
      await wait(120);
    }

    input.disabled = false;
    input.focus();
  }

  async function boot() {

    await type("TERMINAL ACTIVATING...");
    await wait(2000);

    await type("SYSTEM UPDATING...");
    await wait(6000);

    await type("TERMINAL ACTIVE");
    await wait(1000);

    await activatePrompt();
  }

  boot();

  input.addEventListener("keydown", async function (e) {

    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      print("> " + value);

      if (mode === "high command" && value === SECRET) {

        await type("COMMAND PROCESSING");
        await wait(2000);

        await type("LOADING PERSONNEL DATABASE...");
        await wait(3500);

        await type("DATABASE READY");

        mode = "unlocked";
      }

      else if (mode === "unlocked") {

        if (value === "68335") {

          await type("ACCESSING FILE 68335...");
          await wait(5500);

          await type("Decrypting file...");
          await wait(10000);

          await type("Personnel Dossier 68335, Dr. ███████");
          await wait(1500);

          await type("WARNING: This file has been redacted from Level-3 to Level-1. Expect moderate redactations.");
          await wait(2000);

          await type("Dr. ███████, Research Director of Facility-220");
          await wait(2000);

          await type("Full Name: ██████ ███████");
          await wait(2000);

          await type("Height: 179cm | Weight: 82kg");
          await wait(2000);
        }

        else if (value === "12357") {
          await type("junkbot");
        }

        else if (value === "672") {
          await type("[REDACTED]");
        }

        else {
          await type("INVALID FILE ID");
        }
      }

      else {
        await type("INVALID COMMAND");
      }

      input.value = "";
    }
  });

};
