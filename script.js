class Aventureiro {
  constructor(nome, classeRpg) {
    this.nome = nome;
    this.classe = classeRpg;
    this.nivel = 1;
    this.xp = 0;
  }

  treinar() {
    this.xp += 25;
    if (this.xp >= 100) {
      this.nivel += 1;
      this.xp = 0;
    }
  }
}

const form = document.querySelector("#form-heroi");
const input = document.querySelector("#input-nome");
const opcoesInput = document.querySelector("#select-classe");

const nome = document.querySelector("#txt-nome");
const classe = document.querySelector("#txt-classe");
const nivel = document.querySelector("#txt-nivel");
const xp = document.querySelector("#txt-xp");

const btnTreinar = document.querySelector("#btn-treinar");
const barraProgresso = document.querySelector("#progresso-xp");
const areaPrincipal = document.querySelector("#arena");

let meuHeroi;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = input.value;
  const selecao = opcoesInput.value;

  meuHeroi = new Aventureiro(valor, selecao);
  console.log(meuHeroi);

  areaPrincipal.classList.remove("escondido");

  atualizarTela();

  input.value = "";
});

function atualizarTela() {
  nome.innerHTML = meuHeroi.nome;
  classe.innerHTML = meuHeroi.classe;
  nivel.innerHTML = meuHeroi.nivel;
  xp.innerHTML = meuHeroi.xp;
  barraProgresso.style.width = meuHeroi.xp + "%";
}

btnTreinar.addEventListener("click", () => {
  meuHeroi.treinar();
  atualizarTela();
});
