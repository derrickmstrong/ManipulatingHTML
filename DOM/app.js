document.addEventListener('DOMContentLoaded', function () {
  // #1
  const button = document.createElement('button');
  const buttonTxt = document.createTextNode('Click Me');
  button.appendChild(buttonTxt);
  document.body.appendChild(button);
  button.addEventListener('click', alertBtn);
  function alertBtn() {
    return alert('Hello from the DOM');
  }
  // #2
  const showNameBtn = document.querySelector('#showNameBtn');
  const showNameInput = document.querySelector('#showNameInput');
  showNameBtn.addEventListener('click', alertMsg);
  function alertMsg() {
    return alert(showNameInput.value);
  }
  // #3
  const div = document.querySelector('.box');
  div.addEventListener('mouseover', changeBackground);
  div.addEventListener('mouseout', revertBackground);
  function changeBackground() {
    this.style.backgroundColor = 'purple';
  }
  function revertBackground() {
    this.style.backgroundColor = '#ff6328';
  }
  // #4
  const para = document.querySelectorAll('p');
  para[3].addEventListener('click', changeColor);
  function changeColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    this.style.color = `rgb(${r},${g},${b})`;
  }
  // #5
  const addNameBtn = document.querySelector('#addNameBtn');
  const addNameMsg = document.querySelector('#addNameMsg');
  addNameBtn.addEventListener('click', addName);
  function addName() {
    addNameMsg.innerHTML = '<span>D.Strong</span>';
  }
  // #6
  const addFriendBtn = document.querySelector('input[value="Hi Friend"]');
  addFriendBtn.addEventListener('click', addFriend);
  let i = 0;
  function addFriend() {
    const ul = document.querySelector('ul');
    let friends = [
      'Sam',
      'Jay',
      'Binky',
      'Noodle',
      'DW',
      'Latasha Nicole',
      'Mo',
      'Gerry',
      'Cookie',
      'YaYa',
    ];
    if (i < friends.length) {
      const friend = friends[i];
      const li = document.createElement('li');
      li.textContent = friend;
      ul.appendChild(li);
      i++;
    }
  }
});
