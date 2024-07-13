import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// A plain Lit component which can be used in any framework
@customElement(NAME)
export class Button extends LitElement {
  static override styles = css`
    .button {
      position: relative;
      height: 32px;
      line-height: 1.5715;
      border: solid 1px rgb(217, 217, 217);
      background: #fff;
      padding: 4px 15px;
      border-radius: 6px;
      font-size: 14px;
    }
    .button:hover {
      color: var(--primary-color-hover);
      border-color: var(--primary-color-hover);
    }
    .button:active {
      color: var(--primary-color-active);
      border-color: var(--primary-color-active);
    }
    .button::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      opacity: 0.4;
      transition: 0.3s;
    }
    .button::after {
      opacity: 0;
      box-shadow: 0 0 0 6px var(--primary-color);
      transition: 0.3s;
      pointer-events: none;
    }
    .button:active::after {
      box-shadow: none;
      opacity: 0.4;
      transition: 0s;
    }
  `;

  @property() color?: string;

  // private _handleButtonClick(e: Event) {
  //   console.log(e.currentTarget);
  // }

  override render() {
    const classes = {
      button: true,
      ["button-primary"]: this.color === "primary",
    };
    return html`<button type="button" class=${classMap(classes)}>
      <slot></slot>
    </button>`;
  }
}
