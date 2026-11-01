const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate);
}

function addLineBreak() {
    const outputElement = document.getElementById("Main_Box");
    outputElement.innerHTML += "<br>";
}

function throwDice(timeToThrow) {
    let results = [];
    let diceRollSum = 0;
    for (let i = 0; i <= timeToThrow; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        results.fill(diceRoll);
        diceRollSum += diceRoll;
        addElementToWebsite("p", `${i} heiton tulos: ${diceRoll}`);
        addLineBreak();
        console.log(`${i} heiton tulos: ${diceRoll}`);
    }
    addElementToWebsite("p", `Kaikkien noppien silmälukujen summa on ${}`);
}

const timeToThrowDice = parseInt(prompt("Monta kertaa heitetään noppaa:"));
throwDice(timeToThrowDice)
