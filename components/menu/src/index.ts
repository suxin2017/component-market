import { Menu } from "./menu";
import { MenuItem } from "./menu-item";

declare global {
  interface HTMLElementTagNameMap {
    "components-menu": Menu;
    "components-menu-item": MenuItem;
  }
}

export { Menu } from "./menu";
export { MenuItem } from "./menu-item";
