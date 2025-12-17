let input = document.getElementById('inputTarefa');
let main = document.getElementById('areaLista');
let btnAdd = document.getElementById('btnAdd');
let contador = 0;

function addTarefa() {
  let valorInput = input.value;

  if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

    ++contador;

    let novoItem = `
      <div id="${contador}" class="item">
        <div onClick="marcarTarefa(${contador})" class="item-icon">
          <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>

        <div onClick="marcarTarefa(${contador})" class="item-nome">
          ${valorInput}
        </div>

        <div class="item-botao">
          <button onClick="deletar(${contador})" class="delete">
            <i class="mdi mdi-delete"></i> Deletar
          </button>
        </div>
      </div>
    `;

    main.innerHTML += novoItem;
    input.value = "";
    input.focus();
  }
}

function deletar(id){
  let tarefa = document.getElementById(id);

  tarefa.remove();
}

function marcarTarefa(id) {
  let item = document.getElementById(id);
  let icone = document.getElementById('icone_' + id);

  if (!item.classList.contains('clicado')) {
    item.classList.add('clicado');

    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove('clicado');

    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTarefa();
  }
});