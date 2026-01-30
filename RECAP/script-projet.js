 let depenses = [];

// bouton Ajouter
document.getElementById("submit")
    .addEventListener("click", ajouterDepense);
// Fonction dépense
function ajouterDepense() {
 //Récuperation des valeur entrer
    const description = document.getElementById("description").value;
    const montant = document.getElementById("montant").value;

    if (description === "" || montant === "") {
        alert("Remplis tous les champs");
        return;
    }
// on crée les dépenses
    const depense = {
        description: description,
        montant: Number(montant)
    };
// ajout dans le tableau dans dépense
    depenses.push(depense);

    afficherDepenses();
    calculerTotal();

    document.getElementById("description").value = "";
    document.getElementById("montant").value = "";
}
// afficher le tableau 
function afficherDepenses() {
    const tableau = document.getElementById("tableau-depenses");
    tableau.innerHTML = "";

    for (let i = 0; i < depenses.length; i++) {
        let ligne = document.createElement("tr");
//création du bouton supprimer 
        let btnSupprimer = document.createElement("button");
        btnSupprimer.innerText = "Supprimer";

        // bouton Supprimer AVEC addEventListener
        btnSupprimer.addEventListener("click", function () {
            supprimerDepense(i);
        });
// ici on vient  créez une case (td) pour le bouton
        const tdAction = document.createElement("td");
        tdAction.appendChild(btnSupprimer);
// On remplit la ligne avec les infos donner dans le formulaire
        ligne.innerHTML =
            "<td>" + depenses[i].description + "</td>" +
            "<td>" + depenses[i].montant + " €</td>";
// On colle la case du bouton dans la ligne
        ligne.appendChild(tdAction);
    // On colle la ligne finie dans le tableau 
        tableau.appendChild(ligne);
    }
}
// ici on vient créez une variable pour stocker la somme de toutes les dépenses
function calculerTotal() {
    let total = 0;

    for (let i = 0; i < depenses.length; i++) { // la boucle  parcourt toutes les dépenses
total += depenses[i].montant; // on ajoute le montant de la dépense actuelle à total
}
// on affiche le total dans le div avec l'id "total"
// innerText met le texte visible, ici "Total : [valeur] €"
    document.getElementById("total").innerText =
        "Total : " + total + " €";
}

function supprimerDepense(index) { 
    depenses.splice(index, 1);// supprime 1 élément à la position 'index' dans le tableau depense
 
    afficherDepenses();// ça met à jour le tableau affiché pour refléter la suppression
    calculerTotal();//  recalcule le total après suppression pour qu'il soit correct
}
