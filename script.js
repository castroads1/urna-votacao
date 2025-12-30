let votos = [0, 0, 0, 0];

function votar(numero) {
  votos[numero - 1]++;
  atualizar();
}

function atualizar() {
  for (let i = 0; i < 4; i++) {
    let barra = document.getElementById(`bar${i + 1}`);
    barra.style.height = (votos[i] * 25 + 10) + "px";
    barra.innerText = votos[i];
  }
}
