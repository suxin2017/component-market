import { html, css, LitElement } from "lit";
import { customElement, eventOptions, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

const prefix = "components";

// A plain Lit component which can be used in any framework
@customElement(`${prefix}-greeting`)
export class DemoGreeting extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      cursor: point;
    }

    .button {
      height: 32px;
      line-height: 1.5715;
      border: solid 1px rgb(217, 217, 217);
      background: #fff;
      padding: 4px 15px;
      border-radius: 6px;
      font-size: 14px;
    }
  `;

  @property() color?: string;

  private _handleButtonClick(e: HTMLElementEventMap){

  }

  override render() {
    const classes = {
      button: true,
      ["button-primary"]: this.color === "primary",
    };
    return html`<button type="button" @click="${this._handleButtonClick}" class=${classMap(classes)}>
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-greeting": DemoGreeting;
  }
}
