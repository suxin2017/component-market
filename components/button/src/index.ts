import { Button } from "./button";

declare global {
  interface HTMLElementTagNameMap {
    "components-button": Button;
  }
}
console.log(VERSION, NAME, "fff");

export { Button } from "./button";
