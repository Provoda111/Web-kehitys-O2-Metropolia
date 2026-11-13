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

function throwDice() {
    if (won) return;

    let dice_roll = Math.floor(Math.random() * 6) + 1;
    printDiceRoll(dice_roll);

    if (!won) {
        console.log('Start waiting...');

        setTimeout(() => {
            console.log("Waited 4 seconds!");
            throwDice();
        }, 4000);
    }
}

function printDiceRoll(number)
{
    diceThrownAmount++;
    addElementToWebsite("ul", `${diceThrownAmount}. Nopan heiton tulos: ${number}`)

    if (number === 6)
    {
        won = true;
        console.log("User won, he got a number 6 on dice!")
        addElementToWebsite("p", "Hey! You won! Congrats!")
    }
}

alert("This program will throw a dice and stop when the roll is 6");

throwDice();
