import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    
    this.categories = categories;
    this.render();
    this.addEventListnere();
  }

  render(){
    this.elem = createElement(`
    <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button> 
    <nav class="ribbon__inner">
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`)
  let lentaCategor = this.categories.map(item => createElement(`
  <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
  `));

   this.sub(`inner`).append(...lentaCategor);

   
  }

sub(ref){
  return this.elem.querySelector(`.ribbon__${ref}`);
}

addEventListnere(){
  let buttonRight = this.sub(`arrow_right`),
      buttonLeft = this.sub(`arrow_left`); 
    let sumScroll = 0;

    function showBut(){
      if(sumScroll === 0){
        buttonLeft.classList.remove('ribbon__arrow_visible');
      } else {
        buttonLeft.classList.add('ribbon__arrow_visible');
      }
      
      if(sumScroll === 700){
        buttonRight.classList.remove('ribbon__arrow_visible');
      } else {
        buttonRight.classList.add('ribbon__arrow_visible');
      }
    }

       this.elem.onclick = ({target}) =>{

       if(target === this.sub(`item`)){
         let id = this.sub(`item`);
console.log(id.target.dataset.id)
         this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
           detail:id,
           bubbles: true
         }))
       }






        if(target === buttonRight){
          if(0 <= sumScroll <= 700){
          sumScroll += 350;
        }
          this.sub(`inner`).scrollBy(350,0);
         showBut();
         console.log(sumScroll)
         return sumScroll;
        } 
        if(target === buttonLeft){
          if(0 <= sumScroll <= 700){
            sumScroll -= 350;
          }
          this.sub(`inner`).scrollBy(-350,0);
          showBut();
         console.log(sumScroll)

        return  sumScroll;

        }
      }
  }



}
