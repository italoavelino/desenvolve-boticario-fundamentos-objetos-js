const cliente = {
    nome: "Ítalo",
    idade: 21,
    cpf: "123.456.789-10",
    email: "italo@email.com",
    fones:["31912345678", "31998765432"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }, {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    
    depositar: function(valor)
    {
        this.saldo += valor;
    }
}; 

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);

