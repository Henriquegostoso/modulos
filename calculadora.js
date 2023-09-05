var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplica = require ("./modulos/multiplica");
var divisao = require ("./modulos/divisao");
var mensagem = require ("./modulos/mensagem");
var nome = "Fernando";
var msg = "Seja bem-vindo";

console.log("A soma de X e Y é: " + somar(20,90));
console.log("A média de X e Y é: " + media(20,90));
console.log("O produto entre X e Y é: " + multiplica(20,90));
console.log("A divisão entre X e Y é: " + divisao(20,90));
console.log(mensagem(nome,msg));