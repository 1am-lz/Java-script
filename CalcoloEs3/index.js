let calcolo = prompt("Scegli tra le figure geometriche da calcore l'area, Rettangolo, Triangolo, Cerchio.");

function Rettangolo(lato, lato) {

  return lato * lato;

}
const Triangolo = (base, altezza) => {

  return (base * altezza) / 2;

};
const areaCerchio = raggio => {

  return Math.PI * raggio * raggio; // π * r^2

};
let areaFinale = 0;

switch (forma) {

  case "rettangolo":

    let baseRett = parseFloat(prompt("Inserisci la base del rettangolo:"));

    let altRett = parseFloat(prompt("Inserisci l'altezza del rettangolo:"));

    areaFinale = areaRettangolo(baseRett, altRett);

    console.log("Area del rettangolo:", areaFinale.toFixed(2));

    break;


  case "triangolo":

    let baseTri = parseFloat(prompt("Inserisci la base del triangolo:"));

    let altTri = parseFloat(prompt("Inserisci l'altezza del triangolo:"));

    areaFinale = areaTriangolo(baseTri, altTri);

    console.log("Area del triangolo:", areaFinale.toFixed(2));

    break;


  case "cerchio":

    let raggioCerchio = parseFloat(prompt("Inserisci il raggio del cerchio:"));

    areaFinale = areaCerchio(raggioCerchio);

    console.log("Area del cerchio:", areaFinale.toFixed(2));

    break;


  default:

    console.log("Forma non riconosciuta.");

    break;

}

