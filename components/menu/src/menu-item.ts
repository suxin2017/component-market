import { consume } from "@lit/context";
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { MenuContext, menuContext } from "./context";

// A plain Lit component which can be used in any framework
@customElement("components-menu-item")
export class MenuItem extends LitElement {
  static override styles = css`
    li {
      height: 40px;
      line-height: 40px;
      padding-inline-start: 24px;
      padding-inline-end: 16px;
      margin: 4px 0px 8px 0px;
    }
    :host {
      cursor: pointer;
      position: relative;
    }
    li:hover {
      color: var(--primary-color);
    }
    li::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 3px solid var(--primary-color);
      transform: scaleY(0.0001);
      opacity: 0;
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
        opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      content: "";
    }
    .active {
      background-color: var(--primary-1);
      color: var(--primary-color);
    }
    .active::after {
      transform: scaleY(1);
      opacity: 1;
      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  `;

  @property({ reflect: true })
  override role = "none";

  @property()
  active?: boolean = false;

  /** 唯一Key */
  @property({ reflect: true }) index?: string;

  handleClick() {
    console.log(this.index, "key===");

  }

  override render() {
    console.log(this.active);

    return html`<li
      @click=${this.handleClick}
      class=${classMap({
        active: !!this.active,
      })}
    >
      <slot></slot>
    </li>`;
  }
}
