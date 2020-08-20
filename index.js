import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new cliente("Thiago", 11122233309);
const cliente2 = new cliente("Bell", 88822233309);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new contaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(cliente2);
//console.log(contaCorrenteRicardo);