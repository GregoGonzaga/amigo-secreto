let amigos = [];

function adicionarAmigo(){
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();
    if (nome == ''){
        alert('Por favor, digite um nome.');
    } else{
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    }
}

function atualizarListaAmigos(){
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length > 0){
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        exibirResultado(amigoSorteado);
    }else{
        alert('Nenhum amigo sorteado.');
    }
}

function exibirResultado(amigoSorteado){
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
}