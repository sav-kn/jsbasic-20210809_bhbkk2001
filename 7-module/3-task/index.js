import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.elem.onclick = (event) => this.onClick(event);
  }

  render(){
    this.elem = createElement(`<div class="slider">

    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>
   
    
    <div class="slider__progress"></div>
  
    
    <div class="slider__steps">
      ${'<span></span>'.repeat(this.steps)}
    </div>
  </div>`);
  }

  setValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  sub(ref){
    return this.elem.querySelector(`.slider__${ref}`)
  }

  onClick(event){
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
console.log(this.segments * newLeft)
    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
}
}

