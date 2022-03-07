let sectionsImg = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        img: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">`,
    },

    {
        name: "Angela Caroll",
        job: "Chief Editor",
        img: `<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">`,
    },

    {
        name: "Walter Gordon",
        job: "Office manager",
        img: `<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon">`,
    },

    {
        name: "Angela Lopez",
        job: "Social Media Manager",
        img: `<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">`,
    },

    {
        name: "Scott Estrada",
        job: "Developer",
        img: `<img src="img/scott-estrada-developer.jpg" alt="Scott Estrada">`,
    },

    {
        name: "Barbara Ramos",
        job: "Graphic Designer",
        img: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">`,
    },
];


const eleContainer = document.querySelector(".team-container");


for (i = 0; i < 6; i++){
    const cont = document.createElement("div");
    cont.classList.add("team-card");

    const immagine = document.createElement("div");
    immagine.classList.add("card-image");
    immagine.innerHTML = sectionsImg[i].img;

    const text = document.createElement("div");
    text.classList.add("card-text");

    const titleName = document.createElement("h3");
    const titleJob = document.createElement("p");
    text.append(titleName);
    text.append(titleJob);

    titleName.innerHTML = sectionsImg[i].name;
    titleJob.innerHTML = sectionsImg[i].job;

    cont.append(immagine);
    cont.append(text);
    eleContainer.append(cont);
}