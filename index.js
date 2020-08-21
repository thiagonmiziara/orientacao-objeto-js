import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new cliente("Thiago", 11122233309);
const cliente2 = new cliente("Bell", 88822233309);
const contaCorrenteThiago = new contaCorrente(1001, cliente1);
contaCorrenteThiago.depositar(500);
const conta2 = new contaCorrente(102, cliente2);

let valor = 200;
contaCorrenteThiago.transferir(valor, conta2);

//console.log(cliente2);
console.log(contaCorrente.numeroDeContas);