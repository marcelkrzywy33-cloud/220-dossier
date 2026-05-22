window.onload = function () {

  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const SECRET = "database access dossier 68235";

  // MESSAGE QUEUE SYSTEM
  let queue = [];
  let running = false;

  function runQueue() {
    if (running || queue.length === 0) return;

    running = true;
    const item = queue.shift();

    let i = 0;
    const line = document.createElement("div");
    output.appendChild(line);

    const interval = setInterval(() => {
      line.innerHTML += item.text[i];
      i++;

      if (i >= item.text.length) {
        clearInterval(interval);

        setTimeout(() => {
          running = false;
          runQueue();
        }, item.delay || 300);
      }
    }, item.speed || 20);
  }

  function type(text, speed = 20, delay = 300) {
    queue.push({ text, speed, delay });
    runQueue();
  }

  function instant(text) {
    const line = document.createElement("div");
    line.innerHTML = text;
    output.appendChild(line);
  }

  // STARTUP (now queued properly)
  type("TERMINAL ONLINE", 30);
  type("ENTER COMMAND", 30);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

      const value = input.value.trim().toLowerCase();

      instant("> " + value);

      if (value === SECRET) {
        type("ACCESS GRANTED", 40);
        type("LOADING DOSSIER 68235...", 40);
        type("████████████████████", 40);
      } else {
        type("ACCESS DENIED", 40);
      }

      input.value = "";
    }
  });

};
