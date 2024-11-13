let phot = parseInt(prompt("Nombre de photocopies effectuées"));
let prix = 0;

if (phot <= 10) {
    prix = phot*0.1;
}
if (phot <= 30 && phot > 10) {
    prix = 1 + (phot-10)*0.09;
}
if (phot > 30) {
    prix = 1 + 1.8 + (phot-30)*0.08;
}

alert(prix + " E");