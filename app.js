import data  from "./json.js";

 console.log(data);


let modal = document.getElementById("modalTest");
let backdrop = document.getElementById("backdrop");
let openUserBtn = document.getElementById("open-modal-box-btn");
let closeUserBtn = document.getElementById("close-modal-box-btn");
let hardSkilsBtn = document.getElementById("hardSkilsBtn");
let hardSkils = document.getElementById("hardSkils");
let softSkilsBtn = document.getElementById("softSkilsBtn");
let softSkils = document.getElementById("softSkils");


openUserBtn.onclick = () => {
    toogleBackdrop();
    // modal.classList.toggle("modal-active"); 

}



closeUserBtn.onclick = () => {
    toogleBackdrop();

}
window.onclick = event => {
    if (event.target === backdrop) {
        toogleBackdrop();

    }
}

const toogleBackdrop = () => {
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("flex");
}

hardSkilsBtn.onclick = () => {
    hardSkils.classList.toggle("hidden");
}

softSkilsBtn.onclick = () => {
    softSkils.classList.toggle("hidden");
}