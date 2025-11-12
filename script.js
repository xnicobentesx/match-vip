// script.js

// --- Lógica da página index.html (Login/Cadastro) ---

// Elementos do DOM
const loginCard = document.getElementById('login-card');
const registerCard = document.getElementById('register-card');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

if (showRegisterLink && showLoginLink) {
    // Função para mostrar o formulário de Cadastro
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginCard.classList.add('hidden');
        registerCard.classList.remove('hidden');
    });

    // Função para mostrar o formulário de Login
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });
}

// SIMULAÇÃO: Lógica de Login
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Na vida real, você enviaria esses dados para um servidor
        console.log(`Tentativa de Login: ${email}, Senha: ${password}`);

        if (email === "vip@match.com" && password === "documento2025") {
            alert("Login bem-sucedido! Redirecionando para o Dashboard Vip.");
            // Redireciona para o dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert("E-mail ou senha inválidos. Tente novamente.");
        }
    });
}

// SIMULAÇÃO: Lógica de Cadastro
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        // Na vida real, você enviaria esses dados para um servidor para criar o usuário
        console.log(`Novo Cadastro: ${name}, ${email}`);
        alert(`Bem-vindo, ${name}! Seu perfil Vip foi criado com sucesso. Faça login agora.`);

        // Após o cadastro, volta para a tela de login
        registerCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });
}


// --- Lógica da página dashboard.html (Dashboard) ---

// SIMULAÇÃO: Dados de Matches
const mockMatches = [
    { name: "Aurora", age: 28, city: "Rio de Janeiro", img: "https://picsum.photos/id/1025/120/120" },
    { name: "Luan", age: 31, city: "São Paulo", img: "https://picsum.photos/id/1011/120/120" },
    { name: "Isabela", age: 25, city: "Belo Horizonte", img: "https://picsum.photos/id/1005/120/120" },
    { name: "Thiago", age: 34, city: "Curitiba", img: "https://picsum.photos/id/1027/120/120" },
    { name: "Camila", age: 29, city: "Porto Alegre", img: "https://picsum.photos/id/100/120/120" },
    { name: "Pedro", age: 30, city: "Brasília", img: "https://picsum.photos/id/10/120/120" }
];

const matchList = document.getElementById('match-list');
const loadingText = document.getElementById('loading-text');

// Função para renderizar os cards de match
function renderMatches() {
    if (!matchList) return; // Sai se não estiver na página do dashboard

    // Simula o tempo de carregamento de uma API
    setTimeout(() => {
        loadingText.classList.add('hidden'); // Esconde o texto de "Carregando"
        matchList.innerHTML = ''; // Limpa o conteúdo

        mockMatches.forEach(match => {
            const card = document.createElement('div');
            card.classList.add('match-card');
            
            card.innerHTML = `
                <img src="${match.img}" alt="Foto de ${match.name}" class="profile-img">
                <div class="match-name">${match.name}</div>
                <div class="match-info">${match.age} anos, ${match.city}</div>
                <button class="action-btn" onclick="sendVipMatch('${match.name}')">Enviar Match Vip</button>
            `;
            matchList.appendChild(card);
        });

    }, 1500); // 1.5 segundo de delay simulado
}

// Função para simular o envio de um match
function sendVipMatch(name) {
    alert(`Match Vip enviado para ${name}! Aguarde a resposta exclusiva.`);
}

// Função de Logout (disponível globalmente no dashboard)
function logout() {
    if (confirm("Tem certeza que deseja sair da sua sessão Vip?")) {
        window.location.href = 'index.html'; // Volta para a página de login
    }
}

// Inicia a renderização quando a página carrega

document.addEventListener('DOMContentLoaded', renderMatches);
