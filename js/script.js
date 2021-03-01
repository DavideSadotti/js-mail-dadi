// PRIMO PUNTO SULLA MAIL
var listMail = ["d.sadotti@gmail.com", "sado96@live.it", "sadotti@hotmail.it"];
var yourMail;

yourMail = prompt("Inserisci la tua mail e verifica che sia nella lista");

for(var i = 0; i < listMail.length; i++){
  if(yourMail === listMail[i]){
    alert("Sei in lista, puoi entrare!")
    i = listMail.length;
  }else {
    alert("Non sei in lista!")
  }
}
