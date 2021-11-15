import createElement from '../../assets/lib/create-element.js';


export default class Carousel {

  constructor(slides) {
    this.slides = slides;

    this.currentSlideNumber = 0;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
        <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
          </div>
          <div class="carousel__inner"></div>
        </div>
        `);

    let slides = this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img
          src="/assets/images/carousel/${item.image}"
          class="carousel__img"
          alt="slide"
        />
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>`));
console.log(slides)
    this.sub('inner').append(...slides);

    this.update();
  }

  addEventListeners() {
    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id]').dataset.id;

        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }

      if (target.closest('.carousel__arrow_right')) {
        this.next();
      }

      if (target.closest('.carousel__arrow_left')) {
        this.prev();
      }
    };
  }

  sub(ref) {
    return this.elem.querySelector(`.carousel__${ref}`);
  }

  next() {
    this.currentSlideNumber++;
    this.update();
  }

  prev() {
    this.currentSlideNumber--;
    this.update();
  }

  update() {
    let offset = -this.elem.offsetWidth * this.currentSlideNumber;
    this.sub('inner').style.transform = `translateX(${offset}px)`;

    if (this.currentSlideNumber == this.slides.length - 1) {
      this.sub('arrow_right').style.display = 'none';
    } else {
      this.sub('arrow_right').style.display = '';
    }

    if (this.currentSlideNumber == 0) {
      this.sub('arrow_left').style.display = 'none';
    } else {
      this.sub('arrow_left').style.display = '';
    }
  }
  
  
}

/*  


constructor(slides) {
    this.slides = slides;
    this.sumShow = 0;
    this.render();
    this.showLenta();
    //this.addEventListneres();
  }

  render(){
    this.elem = createElement(`
    <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
          </div>
          <div class="carousel__inner"></div>
        </div>`);

      let slides = this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `));

      this.sub(`inner`).append(...slides);

      this.showLenta();
  }

  sub(ref){
    return this.elem.querySelector(`.carousel__${ref}`);
  }
  next(){
    this.sumShow++;
    this.showLenta();
  }
  prev(){
    this.sumShow--;
    this.showLenta();
  }
  addEventListeren(){
    this.elem.onclick = ({target}) => {
   let button = target.closest('.carousel__button');
    if(button){
      let id = target.closest(`[data-id]`).dataset.id;

      this.elem.dispatchEvent( new CustomEvent("prodact-add", {
        detail: id,
        bubbles: true
      }));
    }

    if(target.closest('.carousel__arrow_right')){
      this.next();
      console.log('right')
    }
    if(target.closest('.carousel__arrow_left')){
      this.prev();
    }
   }
  };

  showLenta(){
     let offset = -this.elem.offestWidth * this.sumShow;

     this.sub('inner').style.transform = `translateX(${offset}px)`;

     if(this.sumShow == this.slides.length - 1){
      this.sub('arrow_right').style.display = 'none';
     } else {
      this.sub('arrow_right').style.display = '';
     }
     if(this.sumShow == 0){
      this.sub('arrow_left').style.display = 'none';
     } else {
      this.sub('arrow_left').style.display = '';
     }
     
  }











    this.elem = createElement(`<div class="container">

    <!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">
        <!--Верстка 1-ого слайда-->
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${this.slides[0].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[0].price}</span>
            <div class="carousel__title">${this.slides[0].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
  
        <!--Верстка 2-ого слайда-->
        <div class="carousel__slide" data-id="chicken-cashew">
          <img src="/assets/images/carousel/${this.slides[1].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[1].price}</span>
            <div class="carousel__title">${this.slides[1].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
  
        <!--Верстка 3-ого слайда-->
        <div class="carousel__slide" data-id="red-curry-veggies">
          <img src="/assets/images/carousel/${this.slides[2].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[2].price}</span>
            <div class="carousel__title">${this.slides[2].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
  
        <!--Верстка 4-ого слайда-->
        <div class="carousel__slide" data-id="chicken-springrolls">
          <img src="/assets/images/carousel/${this.slides[3].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[3].price}</span>
            <div class="carousel__title">${this.slides[3].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </div>
 `);
     
  }

  showLenta(){
let lenta = this.elem.querySelector('.carousel__inner'),
    buttonRight = this.elem.querySelector('.carousel__arrow_right'), //div где находятся img
    buttonLeft = this.elem.querySelector('.carousel__arrow_left'),
    imgRight = buttonRight.childNodes[1],
    imgLeft = buttonLeft.childNodes[1];
let sumShow = 0;

    function revece() {
      if(sumShow === -2964){
        imgRight.style.display = 'none';
      } else {
        imgRight.style.display = '';
      }
      if(sumShow === 0){
        imgLeft.style.display = 'none';
      } else {
        imgLeft.style.display = '';
      }



    }
    function showRight() {
      sumShow = sumShow - 988;
      lenta.style.transform = `translateX(${sumShow}px)`;
      revece();
      return sumShow;
    }
    function showLeft() {
      sumShow = sumShow + 988;
      lenta.style.transform = `translateX(${sumShow}px)`;
      revece();
      return sumShow;
    }

    switch(sumShow){
      case 0: 
      imgLeft.style.display = 'none';
      break;
      case -2964:
        imgRight.style.display = 'none';
        break;
    }

    imgLeft.onclick = showLeft;
    imgRight.onclick = showRight;

  }
*/