function carregar() { 
 
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var data = new Date ()
 var hora = data.getHours()
 var minutos = data.getUTCMinutes()
 msg.innerHTML = `Agora são <strong>${hora} horas</strong> e <strong>${minutos} minutos</strong>`

 if (hora >= 0 && hora < 12) {

    img.src = 'manha.png'

 } else if (hora >= 12 && hora < 18) {

     
     img.src = 'tarde.png'

 } else {

    img.src = 'noite.png'

 }

}

