import { html, css, LitElement, PropertyDeclarations } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { MenuContext, menuContext } from "./context";
import { provide } from "@lit/context";
import { MenuItem } from "./menu-item";

// A plain Lit component which can be used in any framework
@customElement("components-menu")
export class Menu extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }
    ul,
    li {
      list-style: none;
    }
    ul {
      margin: 0;
      padding: 0;
    }
  `;

  @property({ reflect: true }) override role = "menu";
  @property() mode?: "horizontal" | "vertical" = "vertical";


  @queryAssignedElements({ selector: "components-menu-item" })
  private slottedChildren!: Array<HTMLElement>;

  @property()
  selectKey?: string;

  private handleOnClick(e: Event) {
    this.slottedChildren.forEach((solttedChild) => {
      if (solttedChild instanceof MenuItem && e.target instanceof MenuItem) {
        if (solttedChild.index === e.target.index) {
          this.selectKey = solttedChild.index;
          solttedChild.active = true;
        } else {
          solttedChild.active = false;
        }
      }
    });

    this.dispatchEvent(new Event("on-click", e));
  }

  // private _handleButtonClick(e: Event) {
  //   console.log(e.currentTarget);
  // }

  override render() {
    return html`<ul type="button" @click=${this.handleOnClick}>
      <slot></slot>
    </ul>`;
  }
}
