export class contaCorrente {
    agencia;
    //#saldo = o https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
    }
}