import { html, css, LitElement } from 'lit';

export class YsaRating extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
    }
  `;

  static properties = {
    starsCount: { type: Number },
    rating: { type: Number },
    text: { type: String },
    showTextarea: { type: Boolean },
  };

  constructor() {
    super();
    this.starsCount = 5;
    this.rating = 2;
    this.text = '¿Qué te ha parecido?';
    this.showTextarea = false;
  }
}
