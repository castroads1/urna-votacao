// Array de votos
let votos = [0, 0, 0, 0];

// Função chamada ao clicar no botão
function votar(numero) {
  votos[numero - 1]++;
  atualizar();
}

// Atualiza barras e porcentagens
function atualizar() {
  let total = votos.reduce((a, b) => a + b, 0);
  let maxAltura = 160;

  for (let i = 0; i < 4; i++) {
    let barra = document.getElementById(`bar${i + 1}`);
    let pct = document.getElementById(`pct${i + 1}`);

    if (total === 0) {
      barra.style.height = "0px";
      pct.innerText = "0%";
    } else {
      let porcentagem = Math.round((votos[i] / total) * 100);
      let altura = (porcentagem / 100) * maxAltura;

      barra.style.height = altura + "px";
      pct.innerText = porcentagem + "%";
    }
  }
}

// Encerrar votação e mostrar vencedor
function encerrarVotacao() {
  let maior = Math.max(...votos);
  let vencedores = [];
  let indiceVencedor = -1;

  for (let i = 0; i < votos.length; i++) {
    if (votos[i] === maior) {
      vencedores.push(`Candidato ${i + 1}`);
      indiceVencedor = i;
    }
  }

  let resultado = document.getElementById("resultadoFinal");
  let foto = document.getElementById("fotoVencedor");

  if (maior === 0) {
    resultado.innerText = "Nenhum voto registrado.";
    foto.style.display = "none";
  } else if (vencedores.length === 1) {
    resultado.innerText = `🏆 Vencedor: ${vencedores[0]} com ${maior} votos!`;
    foto.src = `img/candidato${indiceVencedor + 1}.jpg`;
    foto.style.display = "block";
  } else {
    resultado.innerText = `⚖️ Empate entre: ${vencedores.join(" e ")} com ${maior} votos cada.`;
    foto.style.display = "none";
  }
}
