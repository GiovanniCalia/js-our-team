let sectionsImg = [
    {
        nome: "Wayne Barnett",
        job: "Founder $ CEO",
        img: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">`,
    },

    {
        nome: "Angela Caroll",
        job: "Chief Editor",
        img: `<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">`,
    },

    {
        nome: "Walter Gordon",
        job: "Office manager",
        img: `<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon">`,
    },

    {
        nome: "Angela Lopez",
        job: "Social Media Manager",
        img: `<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">`,
    },

    {
        nome: "Scott Estrada",
        job: "Developer",
        img: `<img src="img/scott-estrada-developer.jpg" alt="Scott Estrada">`,
    },

    {
        nome: "Barbara Ramos",
        job: "Graphic Designer",
        img: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">`,
    },
];


const eleContainer = document.querySelector(".team-container");

const cont = document.createElement("div");
cont.classList.add("team-card");
const immagine = document.createElement("div");
immagine.classList.add("card-image");
immagine.innerHTML = sectionsImg[0].img;
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



const cont2 = document.createElement("div");
cont2.classList.add("team-card");
const immagine2 = document.createElement("div");
immagine2.classList.add("card-image");
immagine2.innerHTML = sectionsImg[1].img;
const text2 = document.createElement("div");
text2.classList.add("card-text");
const titleName2 = document.createElement("h3");
const titleJob2 = document.createElement("p");
text2.append(titleName2);
text2.append(titleJob2);
titleName2.innerHTML = sectionsImg[1].nome;
titleJob2.innerHTML = sectionsImg[1].job;
cont2.append(immagine2);
cont2.append(text2);
eleContainer.append(cont2);

console.log(cont);
console.log(immagine);
console.log(text);