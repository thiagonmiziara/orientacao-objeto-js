import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new cliente("Thiago", 11122233309);

const contaCorrenteThiago = new Conta(0, cliente1, 1001);
contaCorrenteThiago.depositar(500);
contaCorrenteThiago.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);


console.log(contaPoupanca);
console.log(contaCorrenteThiago);