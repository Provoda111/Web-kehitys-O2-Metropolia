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
askParticipantCount();

function askParticipantCount()
{
    const participant_count = parseInt(prompt("How much participants?"));
    askParticipantsName(participant_count);
}

function askParticipantsName(participant_count)
{
    let participants = [];
    for (let i = 0; i < participant_count; i++)
    {
        participants.push(prompt(`Name of participant No ${i + 1}`));
    }
    participants.sort();
    printParticipants(participants);
}

function printParticipants(participants)
{
    addElementToWebsite("h3", "Every participant:");
    for (let i = 0; i < participants.length; i++)
    {
        addElementToWebsite("ol", `${participants[i]}`);
    }
}