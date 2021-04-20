document.querySelector('#enviar').addEventListener('click', function armazenarDados(event) {
    event.preventDefault();
    let nomeUsuario = document.getElementById('nome').value;
    let exibeResposta = document.getElementById('resultado');

    if (nomeUsuario === '') {
        exibeResposta.innerHTML = (`Por favor digite seu nome.`);
    } else {
        exibeResposta.innerHTML = (`${nomeUsuario}, dados salvos com sucesso.`);
    }

})

// Para essa segunda versão o onsubmit="exibirDados(event)" deverá ser inserido na tag Form e não no input

// function exibirDados(event) {
//     event.preventDefault();
//     let pegaNome = document.getElementById('nomeDaPessoa');
//     let exibeResposta = document.getElementById('resposta');
    
//     if (pegaNome.value === '') {
//         exibeResposta.innerText= 'Por favor, digite o seu nome';
//     } else {
//         exibeResposta.innerHTML = (`${pegaNome.value}, dados salvos com sucesso!`);
//     }

// }