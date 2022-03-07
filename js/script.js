let sectionsImg = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">`,
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: `<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">`,
    },

    {
        name: "Walter Gordon",
        role: "Office manager",
        img: `<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon">`,
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: `<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">`,
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: `<img src="img/scott-estrada-developer.jpg" alt="Scott Estrada">`,
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">`,
    },
];

const eleContainer = document.querySelector(".team-container");


for (i = 0; i < 6; i++){
    let cont = document.createElement("div");
    const image = document.createElement("div");
    const text = document.createElement("div");
    const titleName = document.createElement("h3");
    const titleJob = document.createElement("p");

    cont.classList.add("team-card");
    image.classList.add("card-image");
    text.classList.add("card-text");

    image.innerHTML = sectionsImg[i].img;
    titleName.innerHTML = sectionsImg[i].name;
    titleJob.innerHTML = sectionsImg[i].role;

    text.append(titleName);
    text.append(titleJob);
    cont.append(image);
    cont.append(text);
    eleContainer.append(cont);
}

/*
const arrNomi = [];
let index = 0
while (index < 6){
    let names = sectionsImg[index].name;
    arrNomi.push(names)
    index++;
}
console.log(arrNomi);
*/

const btnAdd = document.getElementById("addMemberButton");
const eleName = document.getElementById("name");
const eleRole = document.getElementById("role");
const eleImage = document.getElementById("image");

btnAdd.addEventListener("click", function(){
    eleName.value = "";
    for (i = 0; i < 1; i++){
        let cont = document.createElement("div");
        const image = document.createElement("div");
        const text = document.createElement("div");
        const titleName = document.createElement("h3");
        const titleJob = document.createElement("p");
    
        cont.classList.add("team-card");
        image.classList.add("card-image");
        text.classList.add("card-text");
    
        image.innerHTML = eleImage.value;
        titleName.innerHTML = eleName.value;
        titleJob.innerHTML = eleRole.value;
    
        text.append(titleName);
        text.append(titleJob);
        cont.append(image);
        cont.append(text);
        eleContainer.append(cont);
    }
})