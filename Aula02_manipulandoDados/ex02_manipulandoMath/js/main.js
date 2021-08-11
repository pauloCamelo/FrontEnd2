//Math.random() Obtém um número aleatório, sorteio de 0 a 1

let randomSimple = Math.random();
let randomEscalado = Math.random()*10;// multiplica por 10, se for sorteado o número 0.5 ele vira 50

console.log(randomEscalado);//imprime o número sorteado, possivelmente float

console.log(parseInt(randomEscalado)); // reduz o número para Int

//Math.round() arredonda um float para o Int mais próximo

let baixo = 1.49;
let cima = 1.5;
console.log(Math.round(baixo));
console.log(Math.round(cima));

//Math.max() recebe um conjunto de números e retorna o maior valor.
//tem que receber os valores
// se colocarmos qualquer argumento que ele não consiga converter para Number, vai retornar NaN.

let num1 = Math.max(-654645, 1, 50);
console.log(Math.max(num1));

console.log(Math.max(10, 20));// 20 o maior número depois de zero
console.log(Math.max(-10, -20)); // -10 o valor maior é o mais próximo de zero
console.log(Math.max(-10, 20)); // 20 o positivo sempre é maior que o negativo