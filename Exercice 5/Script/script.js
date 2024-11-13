let c1 = prompt("Entrez le résultat du candidat numéro 1");
let c2 = prompt("Entrez le résultat du candidat numéro 2");
let c3 = prompt("Entrez le résultat du candidat numéro 3");
let c4 = prompt("Entrez le résultat du candidat numéro 4");

if (c1 > 50) {
    alert("le candidat numéro 1 est élu");
}
if (c1 < 12.5 || c2 >= 50 || c3 >= 50 || c4 >= 50) {
    alert("le candidat numéro 1 est battu");
}
if (c1 <= 50 && c1 >= 12.5 && c2 < c1 && c3 < c1 && c4 < c1) {
    alert("le candidat numéro 1 est en balottage favorable");
}
else if (c1 <= 50 && c1 >= 12.5) {
    alert("le candidat numéro 1 est en balottage défavorable");
}