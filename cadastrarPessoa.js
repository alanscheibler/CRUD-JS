function gerarID() {
    return Math.floor(Math.random()*1000)
}

let listaDePessoas = [];

function cadastrarPessoa(pessoa) {
    pessoa.id = gerarID();
    listaDePessoas.push(pessoa);
}

function atualizarPessoa(id, camposAtualizados) {
    const pessoasIndex = listaDePessoas.findIndex(p=>p.id===id);
    if (pessoasIndex!=-1) {
        listaDePessoas[pessoasIndex] = {...listaDePessoas[pessoasIndex], ...camposAtualizados}
    }
}

function deletarPessoa(id) {
    listaDePessoas = listaDePessoas.filter(p => p.id !==id);
}

function listarPessoas() {
    return listaDePessoas;
}

//exemplo
cadastrarPessoa({nome: 'João', idade: 30, cidade: 'São Paulo' });
cadastrarPessoa({nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' });
console.log([...listarPessoas()]);

atualizarPessoa(listaDePessoas[0].id, {cidade: 'Brasilia'})
console.log([...listarPessoas()]);

deletarPessoa(listaDePessoas[0].id)
console.log([...listarPessoas()]);