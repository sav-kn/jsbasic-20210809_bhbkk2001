function highlight(table) {
  // ваш код...

  let gender;
  let age;
  let status;

 for(let i = 0; i < table.rows[0].cells.length; i++){
    
    if(table.rows[0].cells[i].innerHTML === 'Age'){
      age = i;
    }

    if(table.rows[0].cells[i].innerHTML === 'Gender'){
      gender = i;
    }

    if(table.rows[0].cells[i].innerHTML === 'Status'){
      status = i;
    }

  }


  let classBox = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable'
  };

//console.log(table.rows[2].cells[status].hasAttribute('unavailable'));
for(let i = 1; i < table.rows.length; i++ ){
let classStatus = table.rows[i].cells[status];

let boolStatus = classStatus.getAttribute('data-available');

classStatus.parentNode.classList.add(classBox[boolStatus]);

if(classStatus.hasAttribute('data-available') !== true ){
  classStatus.parentNode.setAttribute('hidden', '');
}


let classGender = table.rows[i].cells[gender];

classGender.parentNode.classList.add(classBox[classGender.innerHTML]);


let classAge = table.rows[i].cells[age];

if(classAge.innerHTML < 18){
table.rows[i].style.textDecoration = 'line-through';
}
}
}
