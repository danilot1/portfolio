let senhaSecreta = gerarSenha();
let tentativas = [];

function gerarSenha() {
    let numeros = new Set();
    while (numeros.size < 4) {
        numeros.add(Math.floor(Math.random() * 10));
    }
    return Array.from(numeros).join('');
}

function fazerTentativa() {
    let tentativa = document.getElementById("tentativa").value;
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || isNaN(tentativa)) {
        alert("Digite um número de 4 dígitos únicos!");
        return;
    }
    
    let resultado = verificarTentativa(tentativa);
    tentativas.unshift(`${tentativa}: ${resultado}`);
    atualizarHistorico();
}

function verificarTentativa(tentativa) {
    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
        if (tentativa[i] === senhaSecreta[i]) {
            bulls++;
        } else if (senhaSecreta.includes(tentativa[i])) {
            cows++;
        }
    }
    return `${bulls} Bulls, ${cows} Cows`;
}

function atualizarHistorico() {
    let historico = document.getElementById("historico");
    historico.innerHTML = "";
    tentativas.forEach(tentativa => {
        let li = document.createElement("li");
        li.textContent = tentativa;
        historico.appendChild(li);
    });
}

function mostrarSenha() {
    alert(`A senha secreta é: ${senhaSecreta}`);
}
