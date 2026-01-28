//Comentário em Linha
// para mostrar no terminal use "node (nome do aplicativo)"
// Ctrl + C para cancelar qualquer execução 

//Permite exibir o conteudo no terminal
console.log('Testando o JS')

//criar variável 
var nome = 'João'

//chamando a variável para aparecer no terminal
console.log(nome)

//concatenação de dados (texto e variável)
console.log('O nome do usuário é: '+ nome)
// Outra forma de concatenação
console.log(`O nome do usuário é: ${nome}`)

//import da biblioteca do readline
// readline -> serve para permitir a entrada de dados via terminal 
var readline = require('readline')

//Cria um objeto especialista em entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Permite a entrada de dados do nome do usuário
//question -> utiliza uma função de CALLBACK para devolver o valor digitado
//CALLBACK -> é uma função particular de um método, que é chamada 
// para encaminhar um conteúdo, para o desenvolvedor, esse conteúdo vem de através 
// da variável no argumento "nomeUsuário"

entradaDeDados.question('Digite seu nome:', function(nomeUsuario){
    console.log('O nome digitado foi: '+ nomeUsuario)

    entradaDeDados.question('Digite seu email: ',function(emailUsuario){
        console.log('O email do usuário '+ nomeUsuario + 'é: ' + emailUsuario)
    })
})
