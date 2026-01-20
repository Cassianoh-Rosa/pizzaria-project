var btnCalcular = document.getElementById('calcular')
var totalSpan = document.querySelector('#total span')
var pedirbtn = document.getElementById('pedir')

let total = 0 

btnCalcular.addEventListener('click', calcular)
pedirbtn.addEventListener('click', pedir)

function calcular(event) {
    event.preventDefault()

    total = 0 // reseta o total

    if (document.getElementById('icarne').checked) total += 45
    if (document.getElementById('ifrango').checked) total += 45
    if (document.getElementById('ipepperoni').checked) total += 40
    if (document.getElementById('ichocolate').checked) total += 55

    totalSpan.innerText = total
}

function pedir(event) {
    event.preventDefault()

    if (total > 0) {
        alert('Obrigado pela compra! Seu pedido chegará em breve')
    } else {
        alert('Selecione pelo menos uma pizza')
    }
}
