const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const row = document.querySelector(".row");
const renderBtn = document.querySelector(".renderButtton");
const audio = document.getElementById("starWarsAuido");

function renderCharacters() {
  if (row.innerHTML == "") {
    for (const character of characters) {
      row.innerHTML += `
                        <div class="card col-lg-3 col-md-4 card-build text-center" >
                        <img src="${character.pic}" class="card-img-top card-img" >
                        <div class="card-body">
                        <h5 class="card-title text-center text-white">${character.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">id : ${character.id}</li>
                        <li class="list-group-item">${character.homeworld}</li>
                        </ul>
                    </div>`;
    }
    renderBtn.textContent = "Hide Characters";
    renderBtn.style.backgroundColor = "red"
    audio.play();
  } else {
    removeCharacters();
    // yol 1 removeCharacters'e gerek kalmadan else yazarsak olur
    //   row.innerHTML ="";
    //   renderBtn.innerHTML ="Show Characters"
    //   renderBtn.style.backgroundColor = "seagreen"
    //   audio.pause()
  }
  

}

// yol 2 removecharacters diye fonksiyon oluşturup else kısmına ekleyebiliriz
function removeCharacters() {
  if (row.innerHTML !== "") {
    renderBtn.innerHTML = "Show Characters";
    document.getElementById("btn").style.backgroundColor = "seagreen";
    audio.pause();
    row.innerHTML = "";
  } else {
    renderCharacters();
  }
}

let homeworldsRaw = characters.map(character => character.homeworld)
console.log(homeworldsRaw)

let homeworldFiltered = homeworldsRaw.map(item => item ?? "other")
console.log(homeworldFiltered)

let homeworldsUnique = [... new Set(homeworldFiltered)];
console.log(homeworldsUnique);

let homeworldLowercase = homeworldsUnique.map(itemLower => itemLower.toLowerCase())
console.log(homeworldLowercase)

let homeworlds = homeworldLowercase
console.log(homeworlds)

const homeworldfilterRadio = document.querySelector(".homeworld-filter-radio")

for (let i = 0; i < homeworlds.length; i++){
  homeworldfilterRadio.innerHTML += `<div class="form-check form-check-inline">
  <input  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio${i}" value="${homeworlds[i]}">
  <label  class="form-check-label" for="inlineRadio${i}">${homeworlds[i]}</label>
</div>`
}



// radioInput.addEventListener("change", function(event){
//   const selectedHomeworld = event.target.value;

//   row.innerHTML ="";
  
//   characters.filter(function(character){
//     if(character.homeworld ===   selectedHomeworld){
//       row.innerHTML +=`
//             <div class="card col-lg-3 col-md-4 card-build mb-2 text-center" >
//             <img src="${character.pic}" class="card-img-top card-img " >
//             <div class="card-body">
//             <h5 class="card-title text-center text-white">${character.name}</h5>
//             </div>
//             <ul class="list-group list-group-flush">
//             <li class="list-group-item">id : ${character.id}</li>
//             <li class="list-group-item">${character.homeworld}</li>
//             </ul>
//         </div>
//             `
//     }
//   })
// })