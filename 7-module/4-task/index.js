import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
<<<<<<< HEAD
    this.setValue(value);
    this.addEventListener();
    

  }

  render(){
    this.elem = createElement(`<div class="slider">
    <div class="slider__thumb">
      <span class="slider__value">${this.segments - (this.segments - 1)}</span>
    </div>

   <div class="slider__progress" ></div>
    


    <div class="slider__steps">
      ${'<span></span>'.repeat(this.steps)}
    </div>
  </div>`);


  }
  sub(ref){
    return this.elem.querySelector(`.slider__${ref}`)
  }
  setValue(value){
    this.value = value;
    let sumSegm = Math.round((value * this.segments) / 100) ;
 
    this.sub('thumb').style.left = `${value}%`;
    this.sub('progress').style.width = `${value}%`;
    this.sub('value').innerHTML = sumSegm;
 
 
  }

addEventListener(){
  this.sub('thumb').onpointerdown = this.onPointerDown;

  this.elem.onclick = this.onClick;
}
onClick = event =>{
  event.preventDefault();

  let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth,
  prov = newLeft * 100;
if(prov < 101 && prov > 0){
this.setValue(Math.round(prov));
}
}
onPointerDown = event =>{

  event.preventDefault();

  document.addEventListener('pointermove', this.onPointerMove);
  document.addEventListener('pointerup', this.onPointerUp);
}

onPointerMove = event =>{
  event.preventDefault();

  let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth,
  prov = newLeft * 100;
if(prov < 101 && prov > 0){
this.setValue(Math.round(prov));
}

}

onPointerUp = event =>{
  event.preventDefault();

  document.removeEventListener('pointermove', this.onPointerMove);
  document.removeEventListener('pointerup', this.onPointerUp);

  this.elem.dispatchEvent(
    new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    })
  )
}








}




















/*


 onMouseDown(){

  
function move(event){
  onMouseMove(event.clientX);
}
  function onMouseMove(clientX){
    let newLeft = (clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth,
       prov = newLeft * 100;
  if(prov < 101 && prov > 0){
    this.setValue(Math.round(prov));
  }
   }

 }
 move(){
  
  this.elem.onmousemove = () => this.onMouseMove(event.clientX)
 }
 /*onMouseMove(clientX){
  let newLeft = (clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth,
     prov = newLeft * 100;
if(prov < 101 && prov > 0){
  this.setValue(Math.round(prov));
}
 }
onMouseUp(){
this.elem.removeEventListener('onmousemove', this.move());
}
 

 setValue(value){
   this.value = value;
   let sumSegm = Math.round((value * this.segments) / 100) ;

   this.sub('thumb').style.left = `${value}%`;
   this.sub('progress').style.width = `${value}%`;
   this.sub('value').innerHTML = sumSegm;


 }
=======

    this.addEventListeners();

    this.setValue(value);
  }

  render() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
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

  addEventListeners() {
    this.sub('thumb').ondragstart = () => false;

    this.sub('thumb').onpointerdown = this.onPointerDown;

    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  onPointerDown = event => {
    event.preventDefault();

    this.elem.classList.add('slider_dragging');

    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  }

  onPointerMove = event => {
    event.preventDefault();

    let newLeft = this.calcLeftByEvent(event);

    this.sub('thumb').style.left = `${newLeft * 100}%`;
    this.sub('progress').style.width = `${newLeft * 100}%`;

    // Show the nearest value
    // First half of step is 1, et
    // |-------|-------|-------|-------|
    // | 1 /   2   /   3   /   4   / 5 |
    this.value = Math.round(this.segments * newLeft);
    this.sub('value').innerHTML = this.value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  };

  calcLeftByEvent(event) {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    if (newLeft < 0) { newLeft = 0; }
    if (newLeft > 1) { newLeft = 1; }

    return newLeft;
  }

  onPointerUp = () => {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);

    this.elem.classList.remove('slider_dragging');

    // stick to the final value
    this.sub('thumb').style.left = `${(this.value / this.segments) * 100}%`;
    this.sub('progress').style.width = `${(this.value / this.segments) * 100}%`;

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  };

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

>>>>>>> 8007306d82b0cf2daf5d560d4f53ccc04276f682
}
*/