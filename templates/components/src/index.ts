// @ts-nocheck

import { html, css, LitElement } from "lit";
import { customElement, eventOptions, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

const prefix = "components";

// A plain Lit component which can be used in any framework
@customElement(`${prefix}-greeting`)
export class DemoGreeting extends LitElement {
  static override styles = css`
    :host {
      background: red;
    }
  `;

  @property text = "hello";

  override render() {
    return html`${this.text}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-greeting": DemoGreeting;
  }
}
