const butn = document.querySelector('p');

butn.addEventListener('click', updateName);

function updateName() {
  
  const name = prompt("enter your name");

  butn.textContent = `Hello ${name}`
};