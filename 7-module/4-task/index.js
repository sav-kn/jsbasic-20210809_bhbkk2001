import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
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
}
*/