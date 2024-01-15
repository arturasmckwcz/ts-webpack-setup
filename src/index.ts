import "./style.css";
import { container, colors } from "./config";
import { createBox, getBackgroundColor } from "./utils";

console.log("Hello World!");
const boxes = colors.map((clr) => createBox(clr, container));
boxes.forEach((box) => {
  box.textContent = getBackgroundColor(box);
});
