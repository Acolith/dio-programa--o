var nome = "Acolith";
var nivel = 12000;

if(nivel <= 1000) {nivel = "Ferro"} 
else if(nivel >= 1001 && nivel <= 2000) {nivel = "Bronze"}
else if(nivel >= 2001 && nivel <= 6000) {nivel = "Prata"}
else if(nivel >= 6001 && nivel <= 7000) {nivel = "Ouro"}
else if(nivel >= 7001 && nivel <= 8000) {nivel = "Platina"}
else if(nivel >= 8001 && nivel <= 9000) {nivel = "Ascendente"}
else if(nivel >= 9001 && nivel <= 10000) {nivel = "Imortal"}
  else {nivel = "Radiante" 
  }

console.log(`O Herói de nome ${nome} está no nível ${nivel}.`);
