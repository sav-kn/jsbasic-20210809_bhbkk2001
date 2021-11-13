function makeFriendsList(friends) {
  // ваш код...

let arr = friends.map(elem => elem.firstName + ' ' + elem.lastName );
console.log(arr)
  let ul = document.createElement("ul");
  document.body.append(ul);

  for ( let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.append(li);

  }
}
