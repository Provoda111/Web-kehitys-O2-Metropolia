const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate);
}

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return addElementToWebsite("p", `${year} is leap year`);
    }
    else {
        return addElementToWebsite("p", `${year} is not a leap year`);
    }
}

const year = parseInt(prompt("Hello! Write year: "));
isLeapYear(year);

