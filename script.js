window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const SECRET = "load personnel database";

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
    await wait(1000);

    await type("SYSTEM ACTIVATION IMMINENT...");
    await wait(5000);

    await type("SYSTEM ENABLED");
  }

  boot();

  input.addEventListener("keydown", async function (e) {
    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      print("> " + value);

      if (value === SECRET) {
        await type("ACCESS GRANTED");
        await wait(1000);

        await type("LOADING PERSONNEL DATABASE");
        await wait(5000);

        await type("test");
      } else {
        await type("INVALID COMMAND");
      }

      input.value = "";
    }
  });

};
