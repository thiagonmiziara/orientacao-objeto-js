class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    //#saldo = o https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);