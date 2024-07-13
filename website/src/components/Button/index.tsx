"use client"
import {DemoGreeting as DemoGreetingWC} from "@components/button";
import {createComponent} from '@lit/react';
import React from "react";

export const DemoGreeting = createComponent({
  react: React,
  tagName: 'components-greeting',
  elementClass: DemoGreetingWC,
});