let sectionsImg = [
    {
        nome: "Wayne Barnett",
        job: "Founder $ CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    }
];
console.log(sectionsImg[0].nome);


const eleContainer = document.querySelector(".team-container");
const eleSection = document.querySelector(".team-card");

/*
const img = document.createElement("img");
img.src = "img/wayne-barnett-founder-ceo.jpg";
img.innerHTML = "ciao";
eleContainer.append(img);
*/


const cont = document.createElement("div");
cont.classList.add("team-card");
const immagine = document.createElement("div");
immagine.classList.add("card-image");
const text = document.createElement("div");
text.classList.add("card-text");
const titleName = document.createElement("h3");
const titleJob = document.createElement("p");
text.append(titleName);
text.append(titleJob);
titleName.innerHTML = sectionsImg[0].nome;
titleJob.innerHTML = sectionsImg[0].job;
cont.append(immagine);
cont.append(text);
eleContainer.append(cont);
console.log(cont);
console.log(immagine);
console.log(text);