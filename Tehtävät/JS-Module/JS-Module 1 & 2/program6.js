const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate);
}


if (confirm("Lasketaanko neliöjuuri?")) {
    const number = parseInt(prompt("Kirjoita luvun, josta lasken neliöjuuren: "))
    if (number > -1) {
        const answer = Math.round(Math.sqrt(number));
        addElementToWebsite("p", `luvun ${number} neliöjuuri on ${answer}`);
    }
    else {
        const answer = "Ei pystytä laskea neliöjuurta negatiivisesta luvusta. Anteeksi";
        addElementToWebsite("p", `${answer}`);
    }
}

