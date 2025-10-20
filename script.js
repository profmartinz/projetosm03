// Gera um número aleatório entre 0 e 100
let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 0;

// Captura os elementos do HTML
const campoPalpite = document.getElementById('campo-palpite');
const botaoChutar = document.getElementById('botao-chutar');
const mensagem = document.getElementById('mensagem');
const contadorTentativas = document.getElementById('contador-tentativas');
const botaoReiniciar = document.getElementById('botao-reiniciar');

// Função principal do jogo
function verificarPalpite() {
  const palpite = Number(campoPalpite.value);
  if (palpite < 0 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "⚠️ Digite um número válido entre 0 e 100!";
    mensagem.style.color = "#fde047"; // amarelo
    return;
  }

  tentativas++;
  contadorTentativas.textContent = tentativas;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
    mensagem.style.color = "#22c55e"; // verde
    botaoChutar.disabled = true;
    botaoReiniciar.classList.remove("oculto");
  } 
  else if (palpite < numeroSecreto) {
    mensagem.textContent = "📉 O número é MAIOR!";
    mensagem.style.color = "#facc15"; // amarelo
  } 
  else {
    mensagem.textContent = "📈 O número é MENOR!";
    mensagem.style.color = "#fca5a5"; // vermelho claro
  }

  campoPalpite.value = "";
  campoPalpite.focus();
}

// Reinicia o jogo
function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 101);
  tentativas = 0;
  contadorTentativas.textContent = tentativas;
  mensagem.textContent = "";
  botaoChutar.disabled = false;
  botaoReiniciar.classList.add("oculto");
  campoPalpite.value = "";
  campoPalpite.focus();
}

// Eventos
botaoChutar.addEventListener("click", verificarPalpite);
botaoReiniciar.addEventListener("click", reiniciarJogo);
