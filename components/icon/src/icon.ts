import { html, css, LitElement, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

// A plain Lit component which can be used in any framework
@customElement(NAME)
export class Icon extends LitElement {
  static override styles: = css`
    :host{
      display: inline;
    }
  `


  override render() {
    return html`<i />`;
  }
}
