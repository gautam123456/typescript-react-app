import { calculateRamdom } from "./calculate";

(() => {
  // eslint-disable-next-line no-console
  console.log("Hello World");
  const root: HTMLElement = document.getElementById("root") as HTMLElement;
  const header = document.createElement("h1");
  const text = document.createTextNode(
    "Hello World : Random no - " + calculateRamdom()
  );
  header.appendChild(text);
  root.appendChild(header);
})();
