import helloWorldImg from "./assets/clay-banks_hello-world_unsplash.jpg";

export function helloWorld() {
  console.log("Hello, World!");

  const contentEl = document.getElementById("content");

  const helloWorldEl = document.createElement("div");

  const helloWorldTextEl = document.createElement("div");
  helloWorldTextEl.textContent = "Hello, World!";
  helloWorldEl.appendChild(helloWorldTextEl);

  const helloWorldImgEl = document.createElement("img");
  helloWorldImgEl.src = helloWorldImg;
  helloWorldEl.appendChild(helloWorldImgEl);

  contentEl.appendChild(helloWorldEl);
}
