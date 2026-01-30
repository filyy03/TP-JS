
 let depenses = [];

// bouton Ajouter
document.getElementById("submit")
    .addEventListener("click", ajouterDepense);

function ajouterDepense() {
    let description = document.getElementById("description").value;
    let montant = document.getElementById("montant").value;

    if (description === "" || montant === "") {
        alert("Remplis tous les champs");
        return;
    }

    let depense = {
        description: description,
        montant: Number(montant)
    };

    depenses.push(depense);

    afficherDepenses();
    calculerTotal();

    document.getElementById("description").value = "";
    document.getElementById("montant").value = "";
}

function afficherDepenses() {
    let tableau = document.getElementById("tableau-depenses");
    tableau.innerHTML = "";

    for (let i = 0; i < depenses.length; i++) {
        let ligne = document.createElement("tr");

        let btnSupprimer = document.createElement("button");
        btnSupprimer.innerText = "Supprimer";

        // bouton Supprimer AVEC addEventListener
        btnSupprimer.addEventListener("click", function () {
            supprimerDepense(i);
        });

        let tdAction = document.createElement("td");
        tdAction.appendChild(btnSupprimer);

        ligne.innerHTML =
            "<td>" + depenses[i].description + "</td>" +
            "<td>" + depenses[i].montant + " €</td>";

        ligne.appendChild(tdAction);
        tableau.appendChild(ligne);
    }
}

function calculerTotal() {
    let total = 0;

    for (let i = 0; i < depenses.length; i++) {
        total += depenses[i].montant;
    }

    document.getElementById("total").innerText =
        "Total : " + total + " €";
}

function supprimerDepense(index) {
    depenses.splice(index, 1);
    afficherDepenses();
    calculerTotal();
}
