/******************************************************************************
 * Objetivo: Projeto para realizar o cálculo de médias escolares
 * Autor: João Pedro
 * Data: 29/02/2026
 * Versão: 1.0
 ******************************************************************************/

/*
    TIPOS DE CRIAÇÕES DE VARIÁVEIS

    var -> Permite criar um espaço em memória do tipo variável.
            Essa forma de criação hoje é considerada mais antiga,
            é provável que seja encontrada apenas em projetos mais antigos.
            
            DICA: Caso você precise utilizar o var, recomenda-se 
            que seja utilizado apenas em escopo global.

    let -> Permite criar um espaço em memória do tipo variável.
            Essa forma de criação é realizada somente no escopo 
            local, ou seja, dentro de bloco de programação { }.
            esse tipo de variável deixa de existir ao término do bloco.

    const -> Permite criar um espaço em memória do tipo constante,
            ou seja, esse conteúdo não poderá sofrer mudanças durante 
            o projeto.

            DICA: Se possível você pode criar essa const escrita em MAIÚSCULO
            Para facilitar sua utilização. Pode ser criada de forma local ou global.

            Operadores de comparação

        ==  -> Permite a comparação de dois conteúdos 
        !=  -> Permite comparar a diferença de dois conteúdos
        >   -> Permite validar o valor menor
        <   -> Permite validar o valor maior
        <=  -> Permite validar se o valor é menor ou igual 
        >=  -> Permite validar se o valor for maior ou igual
        === -> Permite comparar a igualdade dos conteúdos e a tipagem de dados 
        !== -> Permite comparar a diferença de conteúdos e a igualdade de tipagem de dados
        ==! -> Permite comparar a igualdade de conteúdos e a diferença de tipagem de dados 

            Tipos de operadores lógicos
            
            E -> AND -> &&
            OU -> OR -> ||
            NÃO -> NOT -> !

    */
                                                    
//import da biblioteca de entrada de dados
const readline = require('readline')

//criação do objeto para captar as entradas de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de Dados do nome 
entradaDeDados.question('Digite o nome do Aluno:', function(nome){
    //Recebe o nome do aluno
    let nomeAluno = nome 
    
    //Entrada de Dados da nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        //Entrada de Dados da nota 2
        entradaDeDados.question('Digite a nota2:',function(valor2){
            let nota2 = valor2
                
            // Entrada de dados da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3
                
                // Entrada de dados da nota 4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4
                    //Validação de entrada vazia
                    if(nomeAluno == ''|| nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                    console.log('Exisem campos obrigatórios que não foram prenchidos!!!')
                
                //Validação de entrada de números apenas entre 0 até 100
                }else if(nota1<0 || nota1>100 || nota2<0 || nota2>100 || nota3<0 || nota3>100 || nota4<0 || nota4>100){
                    console.log('ERRO: Somente são possíveis valores entre 0 até 100')
                
                //Validação de entrada somente de números
                //isNaN() -> Permite a validação de números ou letras
                }else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                    console.log('Somente números são permitidos na entrada das notas')
                }

                })
            })
        })
    })
})

