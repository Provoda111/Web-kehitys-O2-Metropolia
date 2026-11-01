function addElementToWebsite(elementType, elementInnerText) {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    main_box.appendChild(elementToCreate);
}


const isPrimeNumber = (number_to_check) => {
    if (number_to_check <= 1) {
        console.log(`${number_to_check} is not a prime number`);
        addElementToWebsite("p", `${number_to_check} is not a prime number`);
        return false;
    }
    else {
        for (let i = 2; i < number_to_check; i++) {
            if (number_to_check % i === 0) {
                console.log(`${number_to_check} is not a prime number`);
                addElementToWebsite("p", `${number_to_check} is not a prime number`);
                return false;
            }
        }
    }
    addElementToWebsite("p", `${number_to_check} is a prime number`);
    console.log(`${number_to_check} is a prime number`);
    return true;
}

alert("Hello! I will check your inputed number if it is a prime number or not");
const number = parseInt(prompt("Write a number: "));

isPrimeNumber(number);
