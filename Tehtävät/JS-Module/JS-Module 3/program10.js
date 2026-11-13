/**
 * Creates an element in inner HTML (in element with ID "Main_Box").
 *
 * @param {string} elementType The HTML tag type to create.
 * @param {string} elementInnerText The text to insert into HTML element.
 * @returns {HTMLElement} HTML element.
 */
function addElementToWebsite(elementType, elementInnerText) {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createElement(elementType);
    elementToCreate.innerText = elementInnerText;

    return main_box.appendChild(elementToCreate);
}

/**
 * Runs a small meeting voting program.
 * Asks for candidate count and names, initializes objects in an array,
 * collects votes from voters, sorts them, and displays the winner and results.
 */
function runVotingProgram() {
    let candidateCountInput = prompt("Kuinka monta ehdokasta on?");
    let candidateCount = parseInt(candidateCountInput);

    if (isNaN(candidateCount) || candidateCount <= 0) {
        alert("Virheellinen ehdokkaiden lukumäärä.");
        return;
    }

    let candidates = [];

    for (let i = 0; i < candidateCount; i++) {
        let name = prompt(`Ehdokkaan ${i + 1} nimi:`);

        if (name !== null) {
            name = name.trim().toLowerCase();
        }

        if (!name) {
            name = `ehdokas_${i + 1}`;
        }

        candidates.push({
            name: name,
            votes: 0
        });
    }

    let voterCountInput = prompt("Kuinka monta äänestäjää on?");
    let voterCount = parseInt(voterCountInput);

    if (isNaN(voterCount) || voterCount < 0) {
        alert("Virheellinen äänestäjien lukumäärä.");
        return;
    }

    let blankVotes = 0;

    for (let i = 0; i < voterCount; i++) {
        let vote = prompt(`Äänestäjä ${i + 1}: Ketä äänestät? (Jätä tyhjäksi tai peruuta antaaksesi tyhjän äänen)`);

        if (vote === null || vote.trim() === "") {
            blankVotes++;
            continue;
        }

        vote = vote.trim().toLowerCase();
        let found = false;

        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name === vote) {
                candidates[j].votes++;
                found = true;
                break;
            }
        }

        if (!found) {
            blankVotes++;
        }
    }

    // Sort candidates by votes in descending order
    candidates.sort((a, b) => {
        return b.votes - a.votes;
    });

    let winner = candidates[0];

    // Build results string matching requirements
    let resultsString = `Voittaja on ${winner.name} ${winner.votes} äänellä. tulokset: `;

    let parts = [];
    for (let i = 0; i < candidates.length; i++) {
        parts.push(`${candidates[i].name}: ${candidates[i].votes} ääntä`);
    }

    if (blankVotes > 0) {
        parts.push(`tyhjät: ${blankVotes} ääntä`);
    }

    let finalOutput = resultsString + parts.join(" ");

    // Output to console and website
    console.log(finalOutput);
    addElementToWebsite("h2", `Voittaja on ${winner.name} ${winner.votes} äänellä.`);
    addElementToWebsite("p", `Tulokset: ${parts.join(", ")}`);
}

// Käynnistä ohjelma
runVotingProgram();