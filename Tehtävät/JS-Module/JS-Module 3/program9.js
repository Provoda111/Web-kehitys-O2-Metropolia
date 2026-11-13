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

/**
 *
 * @param {numbers[]} numbers
 */
function even(numbers)
{
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 2 === 0)
        {
            evenNumbers.push(numbers[i]);
        }
    }
    return addElementToWebsite("p", `${evenNumbers}`);
}

numbers = [1, 5, 2, 4, 10, 15, 22, 12, 14, 18, 3];
even(numbers);
