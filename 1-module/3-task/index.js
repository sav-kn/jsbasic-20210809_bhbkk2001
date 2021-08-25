function ucFirst(str) {
  
  if (str.length >= 1){
    return str = str[0].toUpperCase() + str.substring(1)
  } else if (str.includes('')){
    return str.toUpperCase()
  }
}
