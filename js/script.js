let sectionsImg = [
    {
        nome: "Wayne Barnett",
        job: "Founder $ CEO",
        img: "img/wayne-barnett-founder-ceo.jpg"
    }
];
console.log(sectionsImg[0].nome)


const eleContainer = document.getElementsByClassName("team-container");
const eleSection = document.getElementsByClassName("team-card");

const cont = document.createElement("div");
cont.classList.add("ciao");
cont.style.backgroundColor = "blue";
cont.innerHTML = "ciao";
console.log("cont",cont);
eleContainer.append(cont);




