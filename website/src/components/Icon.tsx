"use client";

import { Icon as IconWC } from "@components/icon";
import { createComponent } from "@lit/react";
import React from "react";
export const Icon = createComponent({
  react: React,
  tagName: "components-icon",
  elementClass: IconWC,
});
