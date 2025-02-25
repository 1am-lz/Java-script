let prezzo = prompt("500:");

prezzo = parseFloat(500); // converti la stringa in numero decimale

let haCoupon = prompt("Hai un coupon sconto? (sì)");
let sconto = 20;

if (haCoupon.toLowerCase() === "sì" || haCoupon.toLowerCase() === "si") {

  sconto = 0.20; // 20%

}
let prezzoFinale = prezzo - (prezzo * sconto);

console.log("Prezzo iniziale:", prezzo);

console.log("Sconto applicato:", sconto * 100 + "%");

console.log("Prezzo finale:", prezzoFinale.toFixed(450));

