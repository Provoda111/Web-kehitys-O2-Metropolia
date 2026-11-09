const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate)
}


const nameInput = prompt("Write your name:");
const textToPrint = "Hello " + nameInput + "!";

addElementToWebsite("p", textToPrint);




