// Função que adciona o livro na tabela quando o botão 'adcionar livro' for clicado.
document.querySelector('#adicionar').addEventListener('click', function (event) {
    event.preventDefault();
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let isbn = document.querySelector('#isbn').value;
    let dataPublicacao = document.querySelector('#data').value;
    let paginas = document.querySelector('#paginas').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');

    if (titulo === '') {
        alert('Por favor, insira o título do livro');
    } else if (autor === '') {
        alert('Por favor, insira o autor do livro');
    } else if (isbn === '') {
        alert('Por favor, insira o ISBN do livro');
    } else if (dataPublicacao === '') {
        alert('Por favor, insira a data de publicação do livro');
    } else if (paginas === '') {
        alert('Por favor, insira a quantidade de páginas do livro');
    } else {
        // Torna visivel o header da tabela.
        document.querySelector('.header-table').style.visibility = "visible";
        // Insere uma nova linha com campos preenchidos na tabela.
        document.querySelector('#table').innerHTML += (`<tr class=>
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${isbn}</td>
        <td>${dataPublicacao}</td>
        <td>${paginas}</td>
        <td>${dataInsercao}</td>
        <td>
            <span class="deletar" onclick="deletarPublicacao(event)"> X
                <span class="tooltiptext">Deletar Publicação</span>
            </span>
        </td>
        </tr>`);
    }
    limparCampos();
})
// Função que limpa os campos inputs.
function limparCampos() {
    document.querySelector('#titulo').value = '';
    document.querySelector('#autor').value = '';
    document.querySelector('#isbn').value = '';
    document.querySelector('#data').value = '';
    document.querySelector('#paginas').value = '';
}
// Função que elimina apenas a publicação selecionada.
function deletarPublicacao(event) {
    event.target.parentElement.parentElement.remove();
}
