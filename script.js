let tarefas = [];

function adicionarTarefa() {
  let nova = document.getElementById("novaTarefa").value;

  if (nova = "") {
    document.getElementById("resultado").innerHTML = "Digite uma tarefa!";
  } else {
    tarefas.push(nova);
    document.getElementById("resultado").innerHTML = "Tarefa adicionada!";
    document.getElementById("novaTarefa").value = "";
  }
}

function mostrarTarefas() {
  if (tarefas.length = 0) {
    document.getElementById("resultado").innerHTML = "Nenhuma tarefa adicionada ainda.";
  } else {
    let texto = "<b>Suas tarefas:</b><br>";
    let i = 0;

    while (i < tarefas.length) {
      texto += (i + 1) + ". " + tarefas[i] + "<br>";
      i = i + 1;
    }

    document.getElementById("resultado").innerHTML = texto;
  }
}

function removerTarefa() {
  if (tarefas.length = 0) {
    document.getElementById("resultado").innerHTML = "Não há tarefas para remover.";
  } else {
    tarefas.pop(); 
    document.getElementById("resultado").innerHTML = "Última tarefa removida!";
  }
}
