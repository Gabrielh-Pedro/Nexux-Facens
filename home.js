const button = document.getElementById('account1');
const button2 = document.getElementById('account2');

const loginURL = 'login.html';
const registerURL = 'register.html';


button.addEventListener('click', function() {
  window.location.href = loginURL;
});

button2.addEventListener('click', function() {
    window.location.href = registerURL;
  });