import { html, css, LitElement } from 'lit';

export class YsaRating extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
    }
    .star {
      cursor: pointer;
      color: #ddd;
      font-size: 24px;
      display: inline-block;
      margin-right: 5px;
    }

    .star.filled {
      color: gold;
    }

    textarea {
      width: 20rem;
      height: 10rem;
      margin-top: 20px;
    }
  `;
}
