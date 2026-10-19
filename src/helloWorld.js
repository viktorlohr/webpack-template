export function helloWorld() {
  console.log("Hello, World!");

  const contentEl = document.getElementById("content");

  const helloWorldEl = document.createElement("div");
  helloWorldEl.textContent = "Hello, World!";
  contentEl.appendChild(helloWorldEl);
}
