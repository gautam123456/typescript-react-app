import { calculateRamdom } from "./calculate";

(() => {
  console.log("Hello World");
  const root: HTMLElement = document.getElementById("root")!;
  const header = document.createElement("h1");
  const text = document.createTextNode(
    "Hello World : Random no - " + calculateRamdom()
  );
  header.appendChild(text);
  root.appendChild(header);
  console.log(root);
})();
