function sumSalary(salaries) {
  let culc = 0;
  
    for (let key in salaries) {
      if(Number.isFinite(salaries[key])){
     culc += salaries[key];
      }
    }
    return culc;
  }
















/*function sumSalary(salaries) {
  let culc;
  for (let key in sum) {
    if(typeof salaries[key] === number && typeof salaries[key] !== NaN && typeof salaries[key]!== Infinity && typeof salaries[key] !== -Infinity && salaries[key] !== string ){
      culc += salaries[key];
    } else {
      return 0;
    }
  }
  return culc;
 }
*/

