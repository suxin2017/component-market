import { Icon } from "./icon";

declare global {
  interface HTMLElementTagNameMap {
    "components-icon": Icon;
  }
}
console.log(VERSION, NAME, "fff");

export { Icon } from "./icon";
