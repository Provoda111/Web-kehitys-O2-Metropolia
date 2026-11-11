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

askNumbers();

function askNumbers()
{
    let numbers = [];
    alert("This program will ask you a numbers. To stop a program, you'll have to write a number that was wroten by you already. \n In prompt window you'll see a list of your wroten numbers");
    while (true)
    {
        let number = parseInt(prompt(`Write a number To stop you have to write number that is already in your list of numbers (Your numbers: ${numbers})`));

        if (number === numbers.find(number => number === number))
        {
            break
        }
        if (!isNaN(number)) { numbers.push(number); }
    }
    sortNumbersAscending(numbers);
}

/**
 * Sorts array consisted with integer, float or decimal in ascending order.
 * @param {any[]} numbers_to_sort - The array to sort.
 * @returns {any[]} array with sorted number in ascending order.
 */
function sortNumbersAscending(numbers_to_sort)
{
    numbers_to_sort.sort(function(a, b) {return a - b;});
    addElementToWebsite("h3", "Numbers wroten by you sorted in ascending order:")
    addElementToWebsite("p", `${numbers_to_sort}`);
}