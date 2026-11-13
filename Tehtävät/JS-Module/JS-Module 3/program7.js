/**
 * Creates in inner HTML (in element with ID "Main_Box") an element.
 * @param {string} elementType - The innerHTML type to create.
 * @param {string} elementInnerText The text to insert into HTML element.
 * @returns HTML element.
 */
function addElementToWebsite(elementType, elementInnerText) {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createElement(elementType);
    elementToCreate.innerText = elementInnerText;

    return main_box.appendChild(elementToCreate);
}

let diceThrownAmount = 0;
let won = false;


/**
 *
 * @param {number} number_of_sides is responsible for how much sides are on dice. For example a basic dice (like we all know)
 * contains 6 numbers, in some board-roleplay games it contains 21
 */
function throwDice(number_of_sides) {
    if (won) return;

    let dice_roll = Math.floor(Math.random() * number_of_sides) + 1;
    printDiceRoll(dice_roll, number_of_sides);

    if (!won) {
        console.log('Start waiting...');

        setTimeout(() => {
            console.log("Waited 4 seconds!");
            throwDice(number_of_sides);
        }, 4000);
    }
}

function printDiceRoll(number, highestDiceNumber)
{
    diceThrownAmount++;
    addElementToWebsite("ul", `${diceThrownAmount}. Nopan heiton tulos: ${number}`)

    if (number === highestDiceNumber)
    {
        won = true;
        addElementToWebsite("p", "Hey! You won! Congrats!")
    }
}

alert("This program will throw a dice and stop when the roll is the highest number on dice\n" +
    "P.S you select what is the highest :)");


sidesOnDice = parseInt(prompt("How much sides you want on dice?"))

throwDice(sidesOnDice);
