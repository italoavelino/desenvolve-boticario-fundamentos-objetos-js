const cliente = {
    nome: "Ítalo",
    idade: 21,
    cpf: "123.456.789-10",
    email: "italo@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(chave => console.log(cliente[chave]));