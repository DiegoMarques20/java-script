function carregar() { 
 
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var data = new Date ()
 var hora = data.getHours()
 var minutos = data.getUTCMinutes()
 msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
}

