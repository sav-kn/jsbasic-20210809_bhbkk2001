function toggleText() {
  // ваш код...

  let button = document.querySelector('button'),
      text = document.getElementById('text');
console.log(text, button);
      button.onclick = () =>{

        if(text.hasAttribute('hidden')){
          text.toggleAttribute('hidden');
        } else {
          text.setAttribute('hidden', '');
        }

      }

}
