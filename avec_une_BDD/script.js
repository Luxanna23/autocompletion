const search = document.getElementById('search-bar');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const trait = document.getElementById("trait");
if (search) {
    search.addEventListener("keyup", () => {
        result.innerHTML = '';
        result2.innerHTML = '';
        trait.style.display = "none";
        if (search.value != '') {
            trait.style.display = "block";
            fetch('recherche.php/?search=' + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    data.forEach(element => {
                        let e = document.createElement('p');
                        e.innerHTML = '<a href= "element.php?id=' + element.id + '">' + element.nom;
                        result.appendChild(e);
                    });
                })
            fetch("recherche.php/?search2=" + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    data.forEach((element) => {
                        let e = document.createElement("p");
                        e.innerHTML = '<a href= "element.php?id=' + element.id + '">' + element.nom;
                        result2.appendChild(e);
                    });
                });
        }
    })
}

const link = window.location.href;
const id = link.split('='); //sa split en deux une chaine de caractere au niveau du "="
fetch('recherche.php/?id=' + id[1])
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(element => {
            let e = document.createElement('p');
            e.innerHTML = 'Nom: ' + element.nom + '</br>Categorie: ' + element.categorie;
            result.appendChild(e);
        });
    })

