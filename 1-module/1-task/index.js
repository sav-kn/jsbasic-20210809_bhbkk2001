
function factorial(n) {
  let num = n ;

if (num === 0 || num === 1 ) {
      return 1 
  } else {
  for ( let i = n - 1; i > 0; i-- ){
     n = n * i;
  } 
}
  return n;
}

