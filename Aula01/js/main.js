let notaPrimeiro = prompt("Digite a nota do Primeiro Bimestre"); // receber uma variável
notaPrimeiro = Number.parseFloat(notaPrimeiro); //transformar dado recebi padrão String para Number

let notaSegundo = prompt("Digite a nota do Segundo Bimestre");
notaSegundo = Number.parseFloat(notaSegundo);

let notas = [notaPrimeiro, notaSegundo]; // cria um array com a nota do primeiro e segundo bimestre
let somaSegundoBimestre = notas.reduce((acc, elem) => acc + elem); // soma as notas do array
    console.log(
  `A soma das notas dos 2 primeiros bimestres é: ${somaSegundoBimestre.toFixed(2)}`
);

let notaTerceiro = prompt("Digite a nota do Terceiro Bimestre");
notaTerceiro = Number.parseFloat(notaTerceiro);

notas.push(notaTerceiro);// adiciona a nota do terceiro bimestro ao array notas
let soma3Bimestres = notas.reduce((acc, elem) => acc + elem);
    console.log(`A soma das notas dos 3 primeiros bimestres é: ${soma3Bimestres.toFixed(2)}`);

let notaQuarto = prompt("Digite a nota do Quarto Bimestre");
notaQuarto = Number.parseFloat(notaQuarto);

notas.push(notaQuarto);
let somaTotal = notas.reduce((acc, elem) => acc + elem);
let media = somaTotal / notas.length;

if (media >= 7) {
  console.log(`A média final dos 4 Bimestres é: ${media.toFixed(2)}, você foi aprovado 😀`);
} else if (media < 7) {
  console.log(`A média final dos 4 Bimestres é: ${media.toFixed(2)}, foi reprovado 🙁`);
}