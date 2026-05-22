const input = document.getElementById("input");
const output = document.getElementById("output");

const SECRET = "database access dossier 68235";

function print(text) {
  output.innerHTML += text + "\n";
}

print("TERMINAL ONLINE");
print("ENTER COMMAND");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim().toLowerCase();

    print("> " + value);

    if (value === SECRET) {
      print("ACCESS GRANTED");
      print("LOADING DOSSIER...");
      print("████████████████");
    } else {
      print("ACCESS DENIED");
    }

    input.value = "";
  }
});
