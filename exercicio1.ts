import promptSync from 'prompt-sync'
let prompt = promptSync();


// export function exercicio7() {
    console.log("exercicio 7 - FOR")
    let numero: number;
    numero = parseFloat(prompt("Digite um número: "))


 do {
     numero = parseFloat(prompt("Digite um número: "))
 }while (numero != 0)
//