// FOR IN
// for (let variavel in objeto){ código a executar }
// interação de objetos literais, conseguimos acessar as variáveis dentro do objeto.

let pessoas = {
    nome: "Paulo Henrique",
    idade: 27,
    profissao: "Empresário"
}

for (let variavel in pessoas){
    console.log(variavel, pessoas[variavel],); // "Paulo Henrique", 27, "Empresário"
}                                          //essa variavel antes de pessoas[variavel] puxa nome, idade, profissao


//FOR OF
// for (let variavel in array){ código a executar }
// parecido com FOR IN, porém agora em Array
let frutas = ["Melancia", "Abóbora", "Mirtilo", "Jabuti"]

for (let frutasFor of frutas){
    console.log(`${frutasFor} é melhor que`);
}