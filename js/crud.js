const form = document.querySelector('form');

const inputDescricao = document.querySelector('input#descricao');

const selectPrioridade = document.querySelector('select#prioridade');

const tbody = document.querySelector('tbody');

// quando o evento acontecer no 'form'
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const descricao = inputDescricao.value;
    const prioridade = selectPrioridade.value;
    const bt = `<button>Excluir</button>`;
    const tds = `<td>${descricao}</td><td>${prioridade}</td><td>${bt}</td>`;
    const row =`<tr>${tds}</tr>`;
    tbody.innerHTML+= row;
});

// EXCLUIR é um evento em tbody não em button

// e.target mostra quem foi clicado

// e.target.tagName mostra a tag clicada

tbody.addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName==='BUTTON') {
        // e.target.parentElement.remove()-remove o td
        // e.target.parentElement.parentElement.remove() - remove todo tr(linha)
        if (confirm('Confirma?')) { // NÃO SE UTILIZA confirm
            e.target.parentElement.parentElement.remove();
        }
    }
});

// resolver ele em casa
tbody.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'TD') {
        console.log('editar');

    }
});
