import { createContext } from "@lit/context";

export class MenuContext {
  constructor(public activeSelectedKeys?: string[]) {}
}

export const menuContext = createContext<MenuContext>("logger");
