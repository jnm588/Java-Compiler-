async function compileCode() {
  const code = document.getElementById("codeArea").value;
  const stdin = document.getElementById("stdinInput").value;
  const output = document.getElementById("output");

  output.textContent = "Compiling...";

  const response = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      language: "java",
      version: "15.0.2",
      files: [{ name: "Main.java", content: code }],
      stdin: stdin
    })
  });

  const result = await response.json();
  output.textContent = result.run.output;
}