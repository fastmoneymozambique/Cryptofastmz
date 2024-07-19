function register() {
    const number = document.getElementById('register-number').value;
    const password = document.getElementById('register-password').value;

    if (number && password) {
        localStorage.setItem('user', JSON.stringify({ number, password }));
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'https://fastmoneymozambique.github.io/Cryptofast/';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function login() {
    const number = document.getElementById('login-number').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.number === number && user.password === password) {
        alert('Login realizado com sucesso!');
        window.location.href = 'https://fastmoneymozambique.github.io/Cryptofast/';
    } else {
        alert('Número ou senha incorretos.');
    }
}
