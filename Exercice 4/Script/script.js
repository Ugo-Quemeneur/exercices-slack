let sexe = prompt("Entrez homme ou femme")
let age = prompt("Entrez votre age")

if (sexe == "homme"){
    if (age > 20) {
        alert("Vous êtes imposable");
    }
    else {
        alert("Vous n'êtes pas imposable");
    }
} 
if (sexe == "femme") {
    if (age <= 35 && age >= 18) {
        alert("Vous êtes imposable");
    }
    else {
        alert("Vous n'êtes pas imposable");
    }
} 
