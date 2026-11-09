function addElementToWebsite(elementType, elementInnerText) {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    main_box.appendChild(elementToCreate);
}

function addLineBreak() {
    const outputElement = document.getElementById("Main_Box");
    outputElement.innerHTML += "<br>";
}

function findLeapYears(first_year, last_year) {
    for(let year_to_check = first_year; year_to_check <= last_year; year_to_check++) {
        if ((year_to_check % 4 === 0 && year_to_check % 100 !== 0) || (year_to_check % 400 === 0)) {
            addElementToWebsite("p", `${year_to_check}`);
            addLineBreak();
        }
    }
}

alert("Hello! I will check leap years between the year that you want me to start to the year you want me to stop")
const firstYear = parseInt(prompt("Write from which year to start"));
const lastYear = parseInt(prompt("Write to which year to end"))

findLeapYears(firstYear, lastYear);
