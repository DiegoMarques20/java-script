function carregar() { 
 
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var data = new Date ()
var hora = data.getHours()
 var minutos = data.getUTCMinutes()
 msg.innerHTML = `Agora são <strong>${hora} horas</strong> e <strong>${minutos} minutos</strong>`

 if (hora >= 0 && hora < 12) {

    img.src = 'imagens/manha1.png'

    document.body.style.background = '#5BAAEB'

 } else if (hora >= 12 && hora < 18) {

     
     img.src = 'imagens/tarde1.png'

     document.body.style.background = '#EBC796'

 } else {

    img.src = 'imagens/noite1.png'

    document.body.style.background = '#132F6B'

 }

}

