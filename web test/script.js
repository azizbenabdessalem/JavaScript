function function1(){
let txt = document.createElement("p");
txt.textContent="Kuala Lumpur est la 10 ville la plus visité en 2025";
let pm = document.getElementById("div1");
pm.appendChild(txt);
}

function function2(){
    let lien = document.createElement("a");
    lien.textContent="Voir Formula One"
    lien.style.color="blue";
    lien.href="https://en.wikipedia.org/wiki/Formula_One";
    let pm = document.getElementById("div2");
    pm.appendChild(lien);
}

function function3(){
    let champ =document.getElementById("email");
    let pm = champ.value;

    let reponse = confirm("Confirmez-vous votre choix avec cette adresse : "+pm+"?");

    if (reponse == false){
        champ.value="";
    } else {
        champ.disabled=true
        alert("Merci pour votre confiance");
    }
}

document.getElementById("last").addEventListener("click", function(){
    console.log("pm")
});