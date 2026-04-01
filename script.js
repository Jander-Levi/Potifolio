// ==========================================================================
// ARQUIVO JAVASCRIPT
// Lógica do site corporativo tech
// ==========================================================================

// 1. MENU DO CELULAR (HAMBÚRGUER) =========================================
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navList = document.querySelector(".nav-list");

if(mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", function () {
    navList.classList.toggle("active");

    const icone = mobileMenuBtn.querySelector("i");
    if (navList.classList.contains("active")) {
      icone.classList.remove("fa-bars");
      icone.classList.add("fa-times");
    } else {
      icone.classList.remove("fa-times");
      icone.classList.add("fa-bars");
    }
  });
}

// 2. FECHAR O MENU QUANDO CLICAR EM UM LINK (NO CELULAR)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navList.classList.remove("active");
    if(mobileMenuBtn) {
        const icone = mobileMenuBtn.querySelector("i");
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
    }
  });
});

// 3. ANIMAÇÃO SIMPLES NO CABEÇALHO DANDO TRANSLUCIDEZ ====================
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(5, 8, 16, 0.95)"; 
  } else {
    header.style.backgroundColor = "rgba(5, 8, 16, 0.7)"; 
  }
});

// 4. EFEITO DE DIGITAÇÃO (TYPING EFFECT) ==================================
const typingText = document.getElementById("typing-text");
const palavras = ["Desenvolvedor Full Stack_", "Engenheiro de Software_", "Tech Enthusiast_", "Solucionador de Problemas_"];
let palavraAudioIndex = 0;
let charIndex = 0;
let isDeletando = false;

function iniciarTyping() {
    if(!typingText) return;

    const palavraAtual = palavras[palavraAudioIndex];
    
    if (isDeletando) {
        // Removendo char
        typingText.textContent = palavraAtual.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Adicionando char
        typingText.textContent = palavraAtual.substring(0, charIndex + 1);
        charIndex++;
    }

    let velocidadeDigitacao = 100;
    if (isDeletando) velocidadeDigitacao = 50; 

    // Se a palavra terminou de ser digitada
    if (!isDeletando && charIndex === palavraAtual.length) {
        velocidadeDigitacao = 2000; // Tempo de pausa com a palavra completa
        isDeletando = true;
    } else if (isDeletando && charIndex === 0) {
        isDeletando = false;
        palavraAudioIndex = (palavraAudioIndex + 1) % palavras.length; // Cicla as palavras
        velocidadeDigitacao = 500;
    }

    setTimeout(iniciarTyping, velocidadeDigitacao);
}

// Inicia assim que carregar
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(iniciarTyping, 1000);
});

// 5. OBSERVER PARA REVELAR ELEMENTOS NA ROLAGEM (FADE/SLIDE UP) ==========
// A API IntersectionObserver olha quando o elemento entra na tela do usuário.
const observerOpcoes = {
    root: null,
    threshold: 0.15, // Engatilha quando 15% do elemento estiver visível
    rootMargin: "0px"
};

const revealObserver = new IntersectionObserver(function(entradas, observer) {
    entradas.forEach(function(entrada) {
        if(entrada.isIntersecting) {
            entrada.target.classList.add("active"); // Adiciona a classe '.active' que desenha ele na tela
            observer.unobserve(entrada.target); // Para de observar depois que apareceu a primeira vez
        }
    });
}, observerOpcoes);

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach(function(el) {
    revealObserver.observe(el);
});

// 6. SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO =========================
const formContato = document.getElementById("form-contato");
if (formContato) {
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nomeDigitado = document.getElementById("nome").value.trim();
    alert(`Transmissão de base efetuada com êxito! \nObrigado pelo contato, ${nomeDigitado}. Sua rede foi conectada aos nossos servidores emulação.`);
    formContato.reset();
  });
}

// 7. ATUALIZAR O ANO AUTOMÁTICO NO RODAPÉ ================================
const spanAno = document.getElementById("ano-atual");
if (spanAno) {
  const anoVerdadeiro = new Date().getFullYear();
  spanAno.textContent = anoVerdadeiro;
}
