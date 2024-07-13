"use client";
import { Button as DemoGreetingWC } from "@components/button";
import { createComponent } from "@lit/react";
import React from "react";
import "./index.css";

export const DemoGreeting = createComponent({
  react: React,
  tagName: "components-button",
  elementClass: DemoGreetingWC,
});
