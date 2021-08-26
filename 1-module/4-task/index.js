function checkSpam(str) {
  let string = str.toLowerCase();
  if (string.includes('1xbet') || string.includes('xxx')){
    return true
  } else {
    return false
  }
}
