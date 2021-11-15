function initCarousel() {
  // ваш код...
  let lenta = document.querySelector('.carousel__inner'),
      buttonRight = document.querySelector('.carousel__arrow_right'), //div где находятся img
      buttonLeft = document.querySelector('.carousel__arrow_left');
  let imgLeft = buttonLeft.childNodes[1], // картинки
      imgRight = buttonRight.childNodes[1];
      

  let sumShow = 0;    // переменнаая аккумулятор
      //console.log(lenta);
// ф-ция скрывает кнопки в крайних точках ленты
      function revece() {
        if(sumShow === 0){
          imgLeft.style.display = 'none';
          buttonLeft.style.display = 'none';
        } else {
          imgLeft.style.display = '';
          buttonLeft.style.display = '';

        }

        if(sumShow === -2964){
          imgRight.style.display = 'none';
          buttonRight.style.display = 'none';

        } else {
          imgRight.style.display = '';
          buttonRight.style.display = '';

        }
      }
// ф-ция крутит ленту в право
      function showRight(){
        
        sumShow = sumShow - 988;
        revece();
        lenta.style.transform = `translateX(${sumShow}px)`;
       // revece();
        console.log(sumShow)
        return sumShow;
      }
// ф-ция крутит ленту в лево
      function showLeft(){
        sumShow  = sumShow + 988;
        revece();
        lenta.style.transform = `translateX(${sumShow}px)`;
       // revece();
        console.log(sumShow)
        return sumShow;
      }
//если лента находится при загрузке стрн в крайнем положении то скрывает кнопки лев-/-прав
      switch (sumShow) {
        case 0 :
          imgLeft.style.display = 'none';
          buttonLeft.style.display = 'none';

          break;
        
        case -2964 :
          imgRight.style.display = 'none';
          buttonRight.style.display = 'none';

          break;

      }

// обработчики событий для кнопок
      buttonLeft.onclick = showLeft;
      buttonRight.onclick = showRight; 

}
