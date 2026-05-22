window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

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

  async function boot() {
    await type("TERMINAL ACTIVATING...");
    await wait(2000);

    await type("SYSTEM UPDATING...");
    await wait(6000);

    await type("TERMINAL ACTIVE");
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
          await type("kfz");
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
