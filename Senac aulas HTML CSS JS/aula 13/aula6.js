const pessoa = {
    nome: "Alice",
    idade: 30
    };
    const jsonPessoa = JSON.stringify(pessoa);
    console.log(jsonPessoa); // {"nome":"Alice","idade":30}
    const objetoPessoa = JSON.parse(jsonPessoa);
    console.log(objetoPessoa.nome); // Alice