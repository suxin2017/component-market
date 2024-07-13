"use client";

import { Menu as MenuWC,MenuItem as MenuItemWC } from "@components/menu";
import { createComponent } from "@lit/react";
import React from "react";
export const Menu = createComponent({
  react: React,
  tagName: "components-menu",
  elementClass: MenuWC,
 
});

export const MenuItem = createComponent({
  react: React,
  tagName: "components-menu-item",
  elementClass: MenuItemWC,

});
