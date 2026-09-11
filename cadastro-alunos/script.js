let alunos = ["João", "Maria", "Pedro", "Pietro", "Kayke", "Daniel"];
let lista = document.getElementById("listaAlunos");

// 1. Criar uma função isolada para renderizar a lista
function renderizarLista() {
    lista.innerHTML = ""; // Limpa a lista existente para não duplicar
    for (let i = 0; i < alunos.length; i++) {
        lista.innerHTML += `<li>${alunos[i]}</li>`;
    }
}

// 2. Chamar a função para carregar os alunos iniciais
renderizarLista();

function cadastrarAluno() {
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value.trim(); // .trim() remove espaços em branco extras

    if (nome !== "") { // Validação simples para não adicionar nomes vazios
        alunos.push(nome);
        renderizarLista(); // 3. Atualiza a tela com a nova lista
        inputNome.value = ""; // Limpa o campo de texto após cadastrar
    }
}

document.getElementById("btnCadastrar").addEventListener("click", cadastrarAluno);
