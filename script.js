console.log('la');

const search = document.getElementById('search-bar');
const result = document.getElementById('result');
if(search){
    search.addEventListener("keyup", () => {
        result.innerHTML = '';
        if (search.value != '') {
            console.log('recherche.php/?search=' + search.value);
            fetch('recherche.php/?search=' + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    data.forEach(element => {
                        let e = document.createElement('p');
                        e.innerHTML = '<a href= "element.php?id='+ element.id +'">' + element.nom;
                        result.appendChild(e);
                    });
                })
        }
    })
    
}
console.log(window.location.href);

 const link = window.location.href;
const id = link.split('=');
console.log('recherche.php/?id=' + id[1] )
// if(window.location.href)
fetch('recherche.php/?id=' + id[1] )
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach(element => {
        let e = document.createElement('p');
        e.innerHTML = 'Nom: '+ element.nom + '</br>Categorie: ' + element.categorie ;
        result.appendChild(e);
    });
})

