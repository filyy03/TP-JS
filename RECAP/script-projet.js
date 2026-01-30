 let depenses = [];

// bouton ajouter qaund le bouton est cliquer on lance ajouterdepense
document.getElementById("submit")
    .addEventListener("click", ajouterDepense);

// fonction pour ajouter une dépense
function ajouterDepense() {
    // récuperation des valeurs entrées
    const description = document.getElementById("description").value; // on recupere l'id description du form
    const montant = document.getElementById("montant").value;// on recupere l'id montant du form

    //force le remplissage des champs
    if (description === "" || montant === "") {
        alert("Remplis tous les champs");
        return;
    }
// on crée les dépenses via la constante contenant un objet des deux éléments qui constituent une depense
    const depense = {
        description: description,
        montant: Number(montant)
    };

// ajout dans le tableau
    depenses.push(depense);

    afficherDepenses();
    calculerTotal();

    // remet description et montant vide dans le tableau
    document.getElementById("description").value = "";
    document.getElementById("montant").value = "";
}
// fonction pour afficher les dépenses dans le tableau 
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

// on remplit la ligne avec les infos données dans le formulaire
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

    for (let i = 0; i < depenses.length; i++) { // la boucle parcourt toutes les dépenses
total += depenses[i].montant; // on ajoute le montant de la dépense actuelle à total
}

// on affiche le total dans le div avec l'id "total"
    document.getElementById("total").innerText =
        "Total : " + total + " €";
}

function supprimerDepense(index) { 
    depenses.splice(index, 1);// on supprime 1 élément à la position 'index' dans le tableau depense
 
    afficherDepenses();// ça met à jour le tableau affiché pour afficher la suppression
    calculerTotal();//  recalcule le total après suppression pour qu'il soit correct
}
