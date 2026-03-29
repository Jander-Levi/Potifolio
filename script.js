// ==========================================================================
// ARQUIVO JAVASCRIPT
// Aqui nós damos "vida" e interatividade ao site.
// Pense no HTML como o "corpo", no CSS como a "roupa" e no JavaScript
// como o "cérebro" (músculos) que faz as coisas se mexerem ou pensarem.
// ==========================================================================

// 1. MENU DO CELULAR (HAMBÚRGUER) =========================================
/* Primeiro, nós "capturamos" os elementos do HTML que queremos dar ordens.
   Usamos o document.querySelector para achar eles no HTML pelas classes. */
const mobileMenuBtn = document.querySelector(".mobile-menu-btn"); // O botão de 3 listras
const navList = document.querySelector(".nav-list"); // A lista de links que fica escondida no celular

/* Agora nós colocamos um "Ouvinte de Evento" (EventListener) no botão.
   Sempre que alguém CLICAR ('click') nesse botão, uma função (uma ação) vai rodar. */
mobileMenuBtn.addEventListener("click", function () {
  /* O 'classList.toggle' é mágico! Ele faz assim:
       Se o menu NÃO tiver a classe 'active', ele COLOCA a classe (fazendo o menu descer).
       Se o menu JÁ TIVER a classe 'active', ele TIRA a classe (fazendo o menu subir). */
  navList.classList.toggle("active");

  /* Extra: Podemos mudar o ícone do Menu. Se estiver com a classe 'active', 
       o ícone de hambúrguer vira um 'X' (fa-times). Senão, vira hambúrguer (fa-bars). */
  const icone = mobileMenuBtn.querySelector("i");
  if (navList.classList.contains("active")) {
    icone.classList.remove("fa-bars");
    icone.classList.add("fa-times"); // Ícone de 'X'
  } else {
    icone.classList.remove("fa-times");
    icone.classList.add("fa-bars"); // Ícone de barras normais
  }
});

// ==========================================================================
// 2. FECHAR O MENU QUANDO CLICAR EM UM LINK (NO CELULAR)
// ==========================================================================
/* No celular, se apertarmos em "Sobre Mim", o site desce. Porém o blocão do menu 
   continua travando a tela. Precisamos mandar ele fechar sozinho. */
const navLinks = document.querySelectorAll(".nav-link"); // Pega TODOS os links do menu

/* Como são vários links, usamos um loop 'forEach' (Para Cada) link... */
navLinks.forEach(function (link) {
  /* E adicionamos um Ouvinte de Clique para CADA um deles. */
  link.addEventListener("click", function () {
    /* Se a pessoa clicou num link, remova forçadamente a classe 'active' da lista, 
           assim o menu esconde denovo. */
    navList.classList.remove("active");

    // E voltamos o ícone do botão para o Hambúrguer padrão.
    const icone = mobileMenuBtn.querySelector("i");
    icone.classList.remove("fa-times");
    icone.classList.add("fa-bars");
  });
});

// ==========================================================================
// 3. ANIMAÇÃO SIMPLES NO CABEÇALHO (MUDAR FUNDO AO ROLAR)
// ==========================================================================
/* A gente quer que quando a pessoa role o site para baixo, o cabeçalho (Header) 
   fique um pouquinho diferente para dar a impressão de profundidade. */
const header = document.querySelector(".header");

// Fica 'escutando' a rolagem (scroll) do site o tempo todo.
window.addEventListener("scroll", function () {
  // window.scrollY pega a posição vertical da tela.
  // Se a pessoa rolou mais de 50 pixels pra baixo...
  if (window.scrollY > 50) {
    // Colocamos uma sombra forte embaixo do cabeçalho preta e borrada
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
    header.style.backgroundColor = "rgba(15, 23, 42, 0.95)"; // Transparente mas quase sólido
  } else {
    // Se ela voltou tudo pro topo (scrollY menor que 50), tira a sombra.
    header.style.boxShadow = "none";
    header.style.backgroundColor = "rgba(15, 23, 42, 0.9)"; // Volta ao normal
  }
});

// ==========================================================================
// 4. SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO
// ==========================================================================
/* Sem backend, o formulário volta para envio simulado no próprio frontend. */
const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeDigitado = document.getElementById("nome").value.trim();

    alert(
      `Obrigado pelo contato, ${nomeDigitado}!\nSua mensagem foi simulada com sucesso.`,
    );
    formContato.reset();
  });
}

// ==========================================================================
// 5. ATUALIZAR O ANO AUTOMÁTICO NO RODAPÉ
// ==========================================================================
/* Sites que tem o ano "2021" no rodapé em pleno 2026 passam a impressão de
   abandonados. Em vez de você lembrar de mudar no HTML todo ano novo, 
   vamos deixar o JS puxar do relógio Mundial pra você! */
const spanAno = document.getElementById("ano-atual");
if (spanAno) {
  // Cria uma nova instância de tempo 'agora' do seu computador e puxa só os 4 dígitos do Ano.
  const anoVerdadeiro = new Date().getFullYear();
  spanAno.textContent = anoVerdadeiro; // Altera o texto do <span> dentro do HTML dinamicamente.
}
