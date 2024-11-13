let age = prompt("Entrez  votre âge");
let an = prompt("Entrez + si vous êtes titulaires du permis depuis plus de 2 ans ou - si vous êtes titulaires du permis depuis moins de 2 ans");
let crash = prompt("Entrez votre nombre d'accident");
let fid = prompt("Êtes-vous entré dans la maison depuis plus d'un an ?");
let i = parseInt(0);

if (age < 25 && an == "-" && crash == 0) {
    if (fid == "oui") {
        alert("Tarif bleu");
        i++;
        }
    else {
        alert("Tarif rouge");
        i++;
        }
}
if (age > 25 && an == "-" || age < 25 && an == "+") {
    if (crash == 0) {
        if (fid == "oui") {
            alert("Tarif bleu");
            i++;
            }
            else {
            alert("Tarif orange");
            i++;
        }
    }
    if (crash == 1) {
        if (fid == "oui") {
            alert("Tarif bleu");
            i++;
            }
            else {
            alert("Tarif rouge");
            i++;
        }
    }
}
if (age > 25 && an == "+") {
    if (crash == 0) {
        if (fid == "oui") {
            alert("Tarif bleu");
            i++;
            }
            else {
            alert("Tarif vert");
            i++;
            }
    }
    if (crash == 1) {
        if (fid == "oui") {
            alert("Tarif bleu");
            i++;
            }
            else {
            alert("Tarif orange");
            i++;
            }
        }
    if (crash == 2) {
        if (fid == "oui") {
            alert("Tarif bleu");
            i++;
            }
            else {
            alert("Tarif rouge");
            i++;
            }
        }
}
if (i == 0) {
    alert("Refus");
}
