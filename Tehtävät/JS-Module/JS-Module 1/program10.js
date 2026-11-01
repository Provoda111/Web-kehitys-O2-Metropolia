function addElementToWebsite(elementType, elementInnerText) {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createElement(elementType);
    elementToCreate.innerText = elementInnerText;

    main_box.appendChild(elementToCreate);
}

const calculateDiceProbability = (diceCount, targetSum) => {
    const rounds = 10000;
    let targetSumCount = 0;

    for (let i = 0; i < rounds; i++) {
        let currentSum = 0;
        for (let j = 0; j < diceCount; j++) {
            const dieRoll = Math.floor(Math.random() * 6) + 1;
            currentSum += dieRoll;
        }
        if (currentSum === targetSum) {
            targetSumCount++;
        }
    }
    const probability = (targetSumCount / rounds) * 100;
    const resultMessage = `Todennäköisyys saada summa ${targetSum} ${diceCount} nopalla on ${probability.toFixed(2)}%`;
    console.log(resultMessage);
    addElementToWebsite("p", resultMessage);
};

alert("Hei! Tällä ohjelmalla voit laskea noppien silmälukujen summan todennäköisyyden.");
const diceCountInput = parseInt(prompt("Syötä noppien lukumäärä:"));
const targetSumInput = parseInt(prompt("Syötä haluttu silmälukujen summa:"));

calculateDiceProbability(diceCountInput, targetSumInput);