let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para o sorteio!");
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = `Amigo Secreto: ${sorteado}`;
}
