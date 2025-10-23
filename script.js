// ============================
// VARIÁVEIS PRINCIPAIS
// ============================
let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 0;

// Captura os elementos do HTML
const campoPalpite = document.getElementById('campo-palpite');
const botaoChutar = document.getElementById('botao-chutar');
const mensagem = document.getElementById('mensagem');
const contadorTentativas = document.getElementById('contador-tentativas');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const conteiner = document.querySelector('.conteiner');

// Sons (opcionais, adicione arquivos .mp3)
const somAcerto = document.getElementById('som-acerto');
const somErro = document.getElementById('som-erro');

// ============================
// FUNÇÃO PRINCIPAL DO JOGO
// ============================
function verificarPalpite() {
  const palpite = Number(campoPalpite.value);

  // Validação do palpite
  if (palpite < 0 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "⚠️ Digite um número válido entre 0 e 100!";
    mensagem.style.color = "#f59e0b";
    return;
  }

  tentativas++;
  contadorTentativas.textContent = tentativas;

  // Comparando o palpite com o número secreto
  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
    mensagem.classList.add("acertou");
    botaoChutar.disabled = true;
    botaoReiniciar.classList.remove("oculto");
    conteiner.style.backgroundColor = "#dcfce7"; // verde claro de vitória
    somAcerto.play();

    // Bônus: mensagem se acertar rápido
    if (tentativas <= 5) {
      mensagem.textContent += " 🏆 Você foi muito rápido!";
    }

  } else if (Math.abs(palpite - numeroSecreto) === 1) {
    mensagem.textContent = "🔥 Quase acertou!";
    mensagem.style.color = "#f97316";
    somErro.play();

  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "📈 O número é MAIOR!";
    mensagem.style.color = "#2563eb";
    somErro.play();

  } else {
    mensagem.textContent = "📉 O número é MENOR!";
    mensagem.style.color = "#dc2626";
    somErro.play();
  }

  campoPalpite.value = "";
  campoPalpite.focus();
}

// ============================
// FUNÇÃO DE REINICIAR O JOGO
// ============================
function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 101);
  tentativas = 0;
  contadorTentativas.textContent = tentativas;
  mensagem.textContent = "";
  mensagem.classList.remove("acertou");
  botaoChutar.disabled = false;
  botaoReiniciar.classList.add("oculto");
  conteiner.style.backgroundColor = "#ffffff"; // volta ao branco
  campoPalpite.value = "";
  campoPalpite.focus();
}

// ============================
// EVENTOS
// ============================
botaoChutar.addEventListener("click", verificarPalpite);
botaoReiniciar.addEventListener("click", reiniciarJogo);
