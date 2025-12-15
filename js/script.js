let input = document.getElementById('inputTarefa');
let main = document.getElementById('areaLista');
let btnAdd = document.getElementById('addTarefa');
function addTarefa() {
  let valorInput = input.value;

  if (valorInput !== "") {
    let novoItem = `
      <div class="item">
        <div class="item-icone">
          <i class="mdi mdi-circle-outline"></i>
        </div>

        <div class="item-nome">
          ${valorInput}
        </div>

        <div class="item-botao">
          <button class="delete">
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

input.addEventListener("keydown", function(event){
 if(event.keyCode === 13){
    event.preventDefault();
    btnAdd.click();
 }
});