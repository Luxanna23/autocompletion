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
                        e.innerHTML = '<a href= "element.php/?id='+ element.id +'">' + element.nom;
                        result.appendChild(e);
                    });
                })
        }
    })
    
}
console.log(window.location.href);


// if(window.location.href)
// fetch('recherche.php/?id=' + search.value)
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
//     data.forEach(element => {
//         let e = document.createElement('p');
//         e.innerHTML = '<a href= "element.php/?id='+ element.id +'">' + element.nom;
//         result.appendChild(e);
//     });
// })

