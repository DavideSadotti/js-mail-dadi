// PRIMO PUNTO -MAIL
var listMail = ["d.sadotti@gmail.com", "sado96@live.it", "sadotti@hotmail.it"];
var yourMail;
var validateMail;

yourMail = prompt("Inserisci la tua mail e verifica che sia nella lista");

for(var i = 0; i < listMail.length; i++){
  if(yourMail === listMail[i]){
    validateMail = yourMail;
    i = listMail.length;
  }
}

document.getElementById("yourMail").innerHTML = "Questa è la tua mail: " + yourMail;

if(validateMail === yourMail){
  document.getElementById("validateMail").innerHTML = "Sei in lista, puoi entrare!";
}else{
  document.getElementById("validateMail").innerHTML = "Non sei il lista, Fuori!";
}


// SECONDO PUNTO -DADI
var yourNumber;
var pcNumber;

yourNumber = Math.floor(Math.random() * 6) + 1;
pcNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById("yourNumber").innerHTML = "Il tuo numero uscito dai dadi è: " + yourNumber;
document.getElementById("pcNumber").innerHTML = "Il numero del tuo avversario è: " + pcNumber;

if(yourNumber > pcNumber){
  document.getElementById("winner").innerHTML = "Grande, hai vinto tutto!";
}else if(pcNumber > yourNumber){
  document.getElementById("winner").innerHTML = "Che sfiga, hai perso come un Pollo!";
}else{
  document.getElementById("winner").innerHTML = "Non sarai il più fortunato di tutti ma neanche il più sfigato... Ritenta!";
}
