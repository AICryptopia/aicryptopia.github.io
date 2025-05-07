// Button Component
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      border: none;
      position: relative;
      overflow: hidden;
      gap: 0.5rem;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
      background: linear-gradient(135deg, #60cdff 0%, #0284c7 100%);
    }
    
    .cta-button-secondary {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
      border: 1px solid rgba(56, 189, 248, 0.2);
      backdrop-filter: blur(8px);
    }
    
    .cta-button-secondary:hover {
      border-color: rgba(56, 189, 248, 0.4);
      background: linear-gradient(135deg, rgba(40, 53, 74, 0.9) 0%, rgba(20, 30, 50, 0.9) 100%);
    }
    
    /* Size variants */
    .button-sm {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    
    .button-md {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    
    .button-lg {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
    
    /* Disabled state */
    .button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    
    /* Icon styles */
    .button-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
    
    .button-icon.hidden {
      display: none;
    }

    /* Ensure SVG icons inherit color and size properly */
    .button-icon svg {
      width: 1em;
      height: 1em;
      fill: none;
      stroke: currentColor;
      vertical-align: middle;
    }
  </style>
  
  <a class="cta-button">
    <span class="button-text"></span>
    <span class="button-icon hidden"></span>
  </a>
`;

class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // Get elements
    this.button = this.shadowRoot.querySelector('a');
    this.buttonText = this.shadowRoot.querySelector('.button-text');
    this.buttonIcon = this.shadowRoot.querySelector('.button-icon');
  }
  
  static get observedAttributes() {
    return ['variant', 'size', 'href', 'disabled', 'icon', 'target', 'rel'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    // Get attributes
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'md';
    const href = this.getAttribute('href') || '#';
    const disabled = this.hasAttribute('disabled');
    const icon = this.getAttribute('icon');
    const target = this.getAttribute('target');
    const rel = this.getAttribute('rel');
    
    // Clear previous classes
    this.button.className = 'cta-button';
    
    // Set text content
    this.buttonText.textContent = this.textContent.trim() || 'Button';
    
    // Apply variant
    if (variant === 'secondary') {
      this.button.classList.add('cta-button-secondary');
    }
    
    // Apply size
    this.button.classList.add(`button-${size}`);
    
    // Set href and other link attributes
    this.button.href = href;
    if (target) this.button.target = target;
    if (rel) this.button.rel = rel;
    
    // Handle disabled state
    if (disabled) {
      this.button.classList.add('button-disabled');
    }
    
    // Handle icon
    if (icon) {
      this.buttonIcon.classList.remove('hidden');
      this.buttonIcon.innerHTML = icon;
    } else {
      this.buttonIcon.classList.add('hidden');
    }
  }
}

// Register component
customElements.define('custom-button', ButtonComponent); 