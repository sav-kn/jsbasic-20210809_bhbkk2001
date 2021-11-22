import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    
    if(!this.elem.offsetWidth){return}

    if(!this.intialTopCoord){
      this.intialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }

    if(document.documentElement.clientWidth <= 767){

      resetPosition();
      return;

    }
 
    let isCartHeight = window.pageYOffset > this.intialTopCoord;

    if(isCartHeight){
       fixedPosition();
    } else {
      resetPosition();
    }
    
  }

    fixedPosition(){
      Object.assign(this.elem.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1000,
        left: Math.min(
          document.querySelector('.container').getBoundingClientRect().right + 20,
          document.documentElement.clientWidth - this.elem.offsetWidth - 10 
        ) + 'px'
      });
    }
    

    resetPosition(){
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    }
  
    
    
}
