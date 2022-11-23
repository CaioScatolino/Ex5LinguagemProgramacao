function desafio1() {

    let desafio1Valor1 = document.getElementById('valor1').value
    let desafio1Valor2 = document.getElementById('valor2').value
    let desafio1Valor3 = document.getElementById('valor3').value
    let desafio1Valor4 = document.getElementById('valor4').value
    let desafio1Valor5 = document.getElementById('valor5').value

    let desafio1Array = []
    desafio1Array.push(desafio1Valor1)
    desafio1Array.push(desafio1Valor2)
    desafio1Array.push(desafio1Valor3)
    desafio1Array.push(desafio1Valor4)
    desafio1Array.push(desafio1Valor5)

    desafio1Array.sort()
    desafio1Array.reverse()

    console.log(desafio1Array)

    document.getElementById('desafio1').innerHTML = `Resultado: <b>${desafio1Array.join('-')}</b>`


}

function desafio2 () {
    let desafio2Qtd = document.getElementById('qtd').value
    let desafio2Array = []
    for (i = 0; i < desafio2Qtd; i++ ) {
        desafio2Array.push(i)
    }
    document.getElementById('desafio2').innerHTML = `Resultado: <b>${desafio2Array.join(' ')}</b>`



}