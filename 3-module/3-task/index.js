function camelize(str) {
  // ваш код...
 if(str[0] === "-"){
  let strNew = str.slice(1);
  let arrStr = strNew.split('-');
  let newArr = arrStr.map((word) => word[0].toUpperCase() + word.substring(1));
  return str = newArr.join('');
 } else if(str !== '') {
  let arrStr = str.split('-');
  let newArr = arrStr.map((word) => word[0].toUpperCase() + word.substring(1));
 newArr.unshift(newArr[0].toLowerCase());
 newArr.splice(1, 1);
  return str = newArr.join('');
 } else if(str <= 1){
 return str;
 }
}











/*
let arrStr = str.split('-');
let newArr = arrStr.map((word) => word[0].toUpperCase() + word.substring(1));
return str = newArr.join('');
*/