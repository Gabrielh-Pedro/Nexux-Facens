const formulary = document.getElementById('formulary');
const passwordSpan = document.getElementById('password-error');
const userSpan = document.getElementById('username-error');
const cpfSpan = document.getElementById('cpf-error');
const emailSpan = document.getElementById('email-error');
const confirmSpan = document.getElementById('confirm-error');
const errorSpan = document.getElementById('agreeError');


function validarNomeUsuario(nome) {
  return nome.length >= 6 && nome.length <= 14 && /^[a-zA-Z0-9]+$/.test(nome);
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function validarSenha(senha) {
  return senha.length >= 6 && /[A-Z]/.test(senha) && /[!@#$%^&*()_+}{":;''?/>.<,]/.test(senha);
}

document.getElementById('username').addEventListener('input', function () {
  var username = this.value;

  if (!validarNomeUsuario(username)) {
      this.style.color = '#fd0027';
      this.style.borderColor = '#fd0027';
      userSpan.textContent = 'O nome de usuário deve ter entre 6 e 14 caracteres.';
  } else {
      this.style.color = 'rgb(43, 212, 43)';
      this.style.borderColor = 'rgb(43, 212, 43)';
      userSpan.textContent = '';
  }
});

document.getElementById('email').addEventListener('input', function () {
  var email = this.value;

  if (!validarEmail(email)) {
    this.style.color = '#fd0027';
    this.style.borderColor = '#fd0027';
    emailSpan.textContent = 'Por favor, insira um endereço de e-mail válido.';
  } else {
    this.style.color = 'rgb(43, 212, 43)';
    this.style.borderColor = 'rgb(43, 212, 43)';
    emailSpan.textContent = '';
  }
});

document.getElementById('cpf').addEventListener('input', function () {
  var cpf = this.value;

  if (!validarCPF(cpf)) {
    this.style.color = '#fd0027';
    this.style.borderColor = '#fd0027';
    cpfSpan.textContent = 'O CPF deve conter apenas números.';
  } else {
    this.style.color = 'rgb(43, 212, 43)';
    this.style.borderColor = 'rgb(43, 212, 43)';
    cpfSpan.textContent = '';
  }
});

document.getElementById('password').addEventListener('input', function () {
  var password = this.value;

  if (!validarSenha(password)) {
    this.style.color = '#fd0027';
    this.style.borderColor = '#fd0027';
    passwordSpan.textContent = 'A senha deve ter no mínimo 6 caracteres, uma letra maiúscula e um caractere especial.';
  } else {
    this.style.color = 'rgb(43, 212, 43)';
    this.style.borderColor = 'rgb(43, 212, 43)';
    passwordSpan.textContent = '';
  }
});

document.getElementById('confirm-password').addEventListener('input', function () {
  var confirmpass = this.value;
  const senha = document.getElementById('password').value;
  if (confirmpass !== senha) {
    this.style.color = '#fd0027';
    this.style.borderColor = '#fd0027';
    confirmSpan.textContent = 'As senhas não correspondem.';
  } else {
    this.style.color = 'rgb(43, 212, 43)';
    this.style.borderColor = 'rgb(43, 212, 43)';
    confirmSpan.textContent = '';
  }
});

formulary.addEventListener('submit', function (event) {
  const senha = document.getElementById('password').value;
  const confirmacaoSenha = document.getElementById('confirm-password').value;

  if (senha !== confirmacaoSenha) {
    event.preventDefault(); // Cancela o envio do formulário
    confirmSpan.textContent = 'As senhas não correspondem.';
  } else {
    // Se as senhas correspondem, continua com o envio do formulário

    // Verifica se os termos foram concordados
    if (!document.getElementById('agreeTerms').checked) {
      event.preventDefault(); // Cancela o envio do formulário
      errorSpan.textContent = 'Você precisa concordar com os termos para continuar.';
    }
  }
});

document.getElementById('haveAccount').addEventListener('click', function () {
  console.log("Botão clicado!");
  window.location.href = 'login.html';
});

