window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const SECRET = "database access dossier 68235";

  let queue = [];
  let running = false;

  function runQueue() {
    if (running || queue.length === 0) return;

    running = true;
    const text = queue.shift();

    const line = document.createElement("div");
    output.appendChild(line);

    let i = 0;

    const interval = setInterval(() => {
      line.innerHTML += text[i];
      i++;

      if (i >= text.length) {
        clearInterval(interval);

        setTimeout(() => {
          running = false;
          runQueue();
        }, 300);
      }
    }, 25);
  }

  function type(text) {
    queue.push(text);
    runQueue();
  }

  function instant(text) {
    const line = document.createElement("div");
    line.innerHTML = text;
    output.appendChild(line);
  }

  // IMPORTANT: use QUEUE (not instant)
  type("TERMINAL ONLINE");
  type("ENTER COMMAND");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      instant("> " + value);

      if (value === SECRET) {
        type("ACCESS GRANTED");
        type("LOADING DOSSIER 68235...");
        type("████████████████████");
      } else {
        type("ACCESS DENIED");
      }

      input.value = "";
    }
  });

};
