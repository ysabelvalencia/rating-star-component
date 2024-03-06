// ysa-rating
// cris-rating

// <ysa-rating stars-count="5" text="¿Qué te ha parecido?"></ysa-rating>
// <ysa-rating stars-count="10" rating="6" text="¿Qué te ha parecido?"></ysa-rating>

// props:
// 	- starsCount: 5
// 	- rating: 2
// 	- text: '¿Qué te ha parecido?'

// descripción:
// Pintar título
// Pintar tantas estrellas como starsCount.
// Usar el rating para rellenar ese núm de estrellas
// Si tiene rating, que aparezca un textarea debajo para dejar más comentarios

// eventos:
// Al pulsar una estrella se mande el evento ysa-rating-filled
// El evento tiene que tener como detalle el valor del rating

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
    // .star:hover {
    //   color: red;
    // }

    textarea {
      width: 20rem;
      height: 10rem;
      margin-top: 20px;
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

  render() {
    return html`
      <div>
        <h2 class="title">${this.text}</h2>
        <div class="stars-container">${this.renderStars()}</div>
        ${this.showTextarea ? html`<textarea></textarea>` : ''}
      </div>
    `;
  }

  renderStars() {
    const stars = [];

    for (let i = 1; i <= this.starsCount; i++) {
      const filled = i <= this.rating ? 'filled' : '';
      stars.push(
        html`<span
          class="star ${filled}"
          @click=${() => this.handleStarClick(i)}
          >&#9733;</span
        >`
      );
    }

    return html`${stars}`;
  }

  handleStarClick(value) {
    this.rating = value;
    this.showTextarea = true;
    console.log('Estrella clickeada. Rating:', this.rating);
    this.dispatchEvent(
      new CustomEvent('ysa-rating-filled', { detail: { rating: this.rating } })
    );
  }
}
