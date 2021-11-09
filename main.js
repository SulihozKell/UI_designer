
function mintaszoveg() {
    let mintaszoveg_value = document.getElementById("mintaszoveg").value;
    let hibauzenet = document.getElementById("hibauzenet");
    let kiir = document.getElementById("kiir");
    hibauzenet.style.color = "red";
    if (mintaszoveg_value.trim() !== "") {
        kiir.innerHTML = mintaszoveg_value;
        hibauzenet.innerHTML = "";
    }
    else {
        hibauzenet.innerHTML = "A mintaszöveg nem lehet üres!";
    }
}

function betumeret() {
    let betumeret_value = document.getElementById("betumeret").value;
    let kiir = document.getElementById("kiir");
    kiir.style.fontSize = betumeret_value + "pt";
}

function szovegszin() {
    let szovegszin_value = document.getElementById("szovegszin").value;
    let kiir = document.getElementById("kiir");
    kiir.style.color = szovegszin_value;
}

function hatterszin() {
    let hatterszin_value = document.getElementById("hatterszin").value;
    let kiir_hatter = document.getElementById("kiir_hatter");
    kiir_hatter.style.backgroundColor = hatterszin_value;
}

function alaphelyzet() {
    document.getElementById("mintaszoveg").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeret").value = 12;
    document.getElementById("szovegszin").value = "#000000";
    document.getElementById("hatterszin").value = "#ffffff";
    mintaszoveg();
    betumeret();
    szovegszin();
    hatterszin();
}

function init() {
    alaphelyzet();
    document.getElementById("mintaszoveg").addEventListener("input", mintaszoveg);
    document.getElementById("betumeret").addEventListener("input", betumeret);
    document.getElementById("szovegszin").addEventListener("input", szovegszin);
    document.getElementById("hatterszin").addEventListener("input", hatterszin);
    document.getElementById("alaphelyzet").addEventListener("click", alaphelyzet);
}

document.addEventListener("DOMContentLoaded", init);
