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
 * This function gets an array as a parameter and connects all of array elements into one string.
 * @param {string[]} array - array can contain only string. Function takes every string element in there
 * and connects into one string and returns via addElementToWebsite() function
 * @throws {TypeError} If parameter is missing, not an array, or contains non-string elements.
 */
function concat(array)
{
    if (array === undefined || array.length === 0) { return; }

    let string = "";

    for (let i = 0; i < array.length; i++)
    {
        string += array[i];
    }
    return addElementToWebsite("p", `${string}`);

}

function askWords()
{
    let words = [];
    while (true)
    {
        let string = prompt("Write a word:");

        if (string === "" || string === " ") { break; }

        words.push(string);
    }
    concat(words);
}

alert("This website will ask you any word. To stop the process of collecting, you'll have to put " +
    "space");

askWords();