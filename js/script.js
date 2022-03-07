let sectionsImg = [
    {
        nome: "Wayne Barnett",
        job: "Founder $ CEO",
        img: "img/wayne-barnett-founder-ceo.jpg"
    }
];
console.log(sectionsImg[0].nome)


const eleContainer = document.querySelector(".team-container");
const eleSection = document.getElementsByClassName("team-card");

const img = document.createElement("img");
img.src = "img/wayne-barnett-founder-ceo.jpg";
img.innerHTML = "ciao";
eleContainer.append(img);


//cont.classList.add("ciao");
//document.body.appendChild(img)
//cont.style.width =`150px`;
//cont.style.height =`150px`;
//cont.innerHTML = "ciao";
//console.log("cont",cont);







