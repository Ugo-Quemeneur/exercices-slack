// let h = parseInt(prompt("Entrez l'heure :"));
// let min = parseInt(prompt("Entrez les minutes :"));

// if (h == 23 && min == 59) {
//     h = 0;
// }
// else if (min == 59){
//     h++;
// }
// if (min == 59) {
//     min = 0;
// }
// else {
//     min++;
// }

// alert("Dans une minute, il sera " + h + " heure(s) " + min)

let h = parseInt(prompt("Entrez l'heure :"));
let min = parseInt(prompt("Entrez les minutes :"));
let sec = parseInt(prompt("Entrez les secondes :"));

if (h == 23 && min == 59 && sec == 59) {
    h = 0;
    min = 0;
    sec = 0;
}
else if (min == 59 && sec == 59) {
    min = 0;
    sec = 0;
    h++;
}
else if (sec == 59) {
    sec = 0;
    min++;
}
else {
    sec++;
}

alert ("Dans une seconde, il sera " + h + " heure(s) " + min + " minute(s) " + sec)