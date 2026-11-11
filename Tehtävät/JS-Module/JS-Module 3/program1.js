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

userNumbers = [parseInt(prompt("Write a first number")), parseInt(prompt("Write a second number")),
    parseInt(prompt("Write a third number")), parseInt(prompt("Write a fourth number")),
    parseInt(prompt("Write a fifth number"))];

sort_numbers_reversed(userNumbers);

function sort_numbers_reversed(numbers)
{
    let reversed_array = [];
    for (let i = numbers.length - 1; i > -1; i--)
    {
        reversed_array.push(numbers[i]);
    }
    addElementToWebsite("p", `${reversed_array}`);
}