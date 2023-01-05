var datac = new Date()
var horac = datac.getHours()
var hora = document.getElementById('horastxt')
var img = document.querySelector('.imagemtroca')

if (horac > 00 && horac < 06) {
    hora.innerHTML = `Agora são ${horac} horas`
    document.body.style.background = '#4F4F4F'
    img.src = 'imagens/paisagem-madrugada.png'
}else if (horac >= 06 && horac < 12) {
    hora.innerHTML = `Agora são ${horac} horas`
    document.body.style.background = '#FFE74C'
    img.setAttribute('src', 'imagens/paisagem-dia.png')
}else if (horac >= 12 && horac < 18) {
    hora.innerHTML = `Agora são ${horac} horas`
    document.body.style.background = '#68B3E8'
    img.setAttribute('src', 'imagens/fim-de-tarde.png')
}else {
    hora.innerHTML = `Agora são ${horac} horas`
    document.body.style.background = '#3458A1'
    img.setAttribute('src', 'imagens/paisagem-noite.png')
}
