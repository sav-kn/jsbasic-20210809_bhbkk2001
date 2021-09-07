function isEmpty(obj) {
  // ваш код...
  let culc = 0;
  for ( let key in obj ){
    culc += obj[key];
    
  }
  if (culc !== 0){
    return false;
  } else {
    return true;
  }
}
