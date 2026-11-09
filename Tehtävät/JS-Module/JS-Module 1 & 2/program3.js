const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate);
}
const returnSum = (numbers) => {
    let numbers_sum = 0;
    numbers.forEach(number => numbers_sum += number);
    const sumToPrint = String(numbers_sum);
    return addElementToWebsite("p", `Sum of all of your number is: ${sumToPrint}`);
}

const firstNumber = parseInt(prompt("Write first number"));
const secondNumber = parseInt(prompt("Write second number"));
const thirdNumber = parseInt(prompt("Write third number"));

returnSum([firstNumber, secondNumber, thirdNumber]);

