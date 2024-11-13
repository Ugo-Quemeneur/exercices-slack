let i = parseInt(1);
let max = 0;
let cl = 0;

while (i <= 20) {
    nb = prompt("Entrez le nombre numéro " + i + " :");
    if (nb > max) {
        max = nb;
        cl = i;
    }
    i++;
}

alert("Le plus grand de ces nombres est : " + max + "\n" + "C’était le nombre numéro " + cl)