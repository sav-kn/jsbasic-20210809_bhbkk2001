function showSalary(users, age) {
  // ваш код...
  let strVl,
      arrVl = [];
  for (let i = 0; i < users.length; i++){
    if(i = 0 && users[i].age === age){
      arrVl +=  users[i].name + ', ' + users[i].balance; 
    } else if (i > 0 && users[i].age <= age){
      arrVl += '\n' + users[i].name + ', ' + users[i].balance; 
    }
  }
  return strVl = arrVl;
}
