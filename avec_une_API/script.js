const search = document.getElementById("search-bar");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const trait = document.getElementById("trait");
if (search) {
  search.addEventListener("keyup", () => {
    result.innerHTML = "";
    result2.innerHTML = "";
    trait.style.display = "none";
    if (search.value != "") {
      trait.style.display = "block";
      fetch(
        "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/fr_FR/champion.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          element = data.data;
          for (let key in element) {
            key = key.toLowerCase();
            if (
              key.includes(search.value.toLowerCase()) &&
              !key.startsWith(search.value.toLowerCase())
            ) {
              let e = document.createElement("a");
              e.href = `element.php?name=${key}`;
              //e.href = "element.php?name=" + key; (c la meme chose) 

              e.innerHTML = key.toUpperCase();
              result.appendChild(e);
              result.appendChild(document.createElement("br"));
            }
            // const f = key.filter(a => a == search.value);
            // console.log(f);
            if (key.startsWith(search.value.toLowerCase())) {
              let e = document.createElement("a");
              e.href = `element.php?name=${key}`;
              e.innerHTML = key.toUpperCase();
              result2.appendChild(e);
              result2.appendChild(document.createElement("br"));
            }
          }
        });
    }
  });
}

const link = window.location.href;
const nameUrl = link.split("=")[1];
const realName = nameUrl.charAt(0).toUpperCase() + nameUrl.slice(1);

getChampionInfo(realName);

function getChampionInfo(name) {
  fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/fr_FR/champion/${name}.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const champion = data.data[name];
      const championName = champion.name;
      const championTitle = champion.title;
      const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;

      const htmlName = document.createElement("h1");
      const htmlTitle = document.createElement("h2");
      const htmlImage = document.createElement("img");

      htmlName.innerHTML = championName;
      htmlTitle.innerHTML = championTitle;
      htmlImage.src = championImage;
      htmlImage.classList.add("champion-image");

      result3.appendChild(htmlName);
      result3.appendChild(htmlTitle);
      result3.appendChild(htmlImage);
    });
}
