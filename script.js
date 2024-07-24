//q1

let nome = "Fulano"
console.log(nome)


//q2

const carros = ['fusca', 'camaro', 'opala']

for (const item of carros) {
    console.log(item)
}

//q3

const frutas = ['maca', 'banana', 'laranja', 'uva']

console.log(frutas[2])

//q4

function areaQuadrado(lado) {
    console.log(`A área de um quadrado de lado ${lado}m é ${lado * lado}m2`)
}

areaQuadrado(2)

//q5

let a = 10
let b = 5
let c = 20

let soma = a + b

console.log(`A soma de a=${a} e b=${b} é ${soma}`)

if (soma < c) {
    console.log(`A soma de a=${a} e b=${b} é menor que ${c}`)
}

//q6

// a saida será 510 pois como 5 é um tipo string a soma atuará como uma concatenação

//q7

if (a == b) {
    c = a + b
} else {
    c = a * b
}
console.log(c)

//q8

for (var contador = 0; contador < 5; contador++) {

}
console.log(contador)

//q9

function antSuc(numero) {
    console.log(`O antecessor de ${numero} é ${numero - 1}`)
    console.log(`O sucessor de ${numero} é ${numero + 1}`)
}

antSuc(5)

//q10

//11//
var numero = 5
if (numero === 5) {
    console.log("o Número é igual a 5.");
} else if (numero == 5) {
    console.log("O número é igual a 5, com conversão de tipo.");

} else {
    console.log("O numero não é igual a 5.");
}

//q12
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
nums.forEach((n) => {
    if (n % 2 == 0) {
        pares.push(n)
    }
})
console.log(pares)

//q13

function calculaSituacao(n1, n2, n3) {
    let media = ((n1 + n2 + n3) / 3).toFixed(2)

    if (media >= 7) {
        console.log(`Média ${media}, resultado: Aprovado.`)
    } else if (media >= 5) {
        console.log(`Média ${media}, resultado: Recuperação.`)
    } else {
        console.log(`Média ${media}, resultado: Reprovado.`)
    }
}

calculaSituacao(7, 6, 9)

//q14

function calculaIMC(altura, peso) {
    let imc = (peso / (altura ** 2)).toFixed(2)

    if (imc <= 18.5) {
        console.log(`Seu IMC é ${imc}, resultado: Abaixo do peso`)
    } else if (imc <= 25) {
        console.log(`Seu IMC é ${imc}, resultado: Peso ideal`)
    } else if (imc <= 30) {
        console.log(`Seu IMC é ${imc}, resultado: Sobrepeso`)
    } else if (imc <= 40) {
        console.log(`Seu IMC é ${imc}, resultado: Obesidade`)
    } else {
        console.log(`Seu IMC é ${imc}, resultado: Obesidade morbida`)
    }
}

calculaIMC(1.80, 80)

//q15

function tabuada(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(8)

//q16

function divisao(n1, n2) {
    try {
        if (n2 == 0) {
            throw Error("Nao pode divisao por zero")
        } else {
            console.log(n1 / n2)
        }
    } catch (error) {
        console.error(error)
    }
}

divisao(10, 2)
divisao(10, 0)

//q17

function calculaViagem(distancia) {
    const gasolina = 5.24
    const autonomia = 9.8
    const viagemTotal = distancia * 2
    let resultado = ((viagemTotal / autonomia) * gasolina).toFixed(2)

    console.log(`Para fazer ${distancia}kms ida e volta você deve abastecer ${resultado}R$`)
}

calculaViagem(2900)

//q18

function calcularFatorial(numero) {
    try {
        if (typeof numero !== 'number' || !Number.isInteger(numero) || numero < 0) {
            throw new Error('O número deve ser um inteiro positivo.');
        } else if (numero === 0) {
            console.log(`O fatorial de ${numero} é 1`)
        } else {
            let fatorial = 1;
            for (let i = 2; i <= numero; i++) {
                fatorial *= i;
            }
            console.log(`O fatorial de ${numero} é ${fatorial}`)
        }
    } catch (error) {
        console.error('Erro ao calcular o fatorial:', error);
    }
}

calcularFatorial(5)
calcularFatorial(0)
calcularFatorial(1)
calcularFatorial(-5)

//q19

const questao = [12, 36, 52, 77]
const resposta = []

for(let i = 0; i < questao.length; i++){
    resposta.push(questao[i] + 7)
}

console.log(resposta)

//q20
let rg = false
let cnh = false

if(rg || cnh){
    console.log("Faz prova")
} else {
    console.log("Vai chorar em casa")
}

//q21
var qfrutas = ['maca', 'banana', 'laranja']
console.log(qfrutas[3])