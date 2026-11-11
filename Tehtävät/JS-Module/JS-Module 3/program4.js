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

askNumber();

function askNumber()
{
    let numbers = [];
    while (true)
    {
        let number = parseInt(prompt("Enter a number:\nTo stop you have to write 0"));
        if (number === 0)
        {
            break;
        }
        if (!isNaN(number)) { numbers.push(number); }
    }
    sortNumbersDescending(numbers);
}

/**
 * Sorts array consisted with integer, float or decimal in descending order.
 * @param {any[]} numbers_to_sort - The array to sort.
 * @returns {any[]} array with sorted number in descending order.
 */
function sortNumbersDescending(numbers_to_sort)
{
    numbers_to_sort.sort(function(a, b) {return a - b;});
    numbers_to_sort.reverse();
    addElementToWebsite("h3", "Numbers wroten by you sorted in descending order:")
    addElementToWebsite("p", `${numbers_to_sort}`);
}