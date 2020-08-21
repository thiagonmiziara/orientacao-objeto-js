import { cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new cliente("Thiago", 11122233309);

const contaCorrenteThiago = new ContaCorrente(cliente1, 1001);
contaCorrenteThiago.depositar(500);
contaCorrenteThiago.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


console.log(contaPoupanca);
console.log(contaCorrenteThiago);