let tableau = [4, 34, 45, 3, 1, 8, 48, 98, 107, 45]
console.log(tableau)

/* Début push ( ajout d'un élément au tableau) */
tableau.push(157, 874, 59)
/* Fin push ( ajout d'un élément au tableau) */

console.log(tableau)
document.getElementById("debut").innerHTML = tableau


/* Début ordre croissant */
function triABulleCroissant(tableau) {

    let length = tableau.length
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (tableau[j] > tableau[j+1]) {
                let ordre = tableau[j]
                tableau[j] = tableau[j+1]
                tableau[j+1] = ordre
            }
        }
    }
    console.log(tableau)
    document.getElementById("resultatcroissant").innerHTML = tableau
}
/* Fin ordre croissant */


/* Début ordre décroissant */
function triABulleDecroissant(tableau) {

    let length = tableau.length
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length + 1; j++) {
            if (tableau[j] > tableau[j-1]) {
                let ordre = tableau[j]
                tableau[j] = tableau[j-1]
                tableau[j-1] = ordre
            }
        }
    }
    console.log(tableau)
    document.getElementById("resultatdecroissant").innerHTML = tableau
}
/* Fin ordre décroissant */