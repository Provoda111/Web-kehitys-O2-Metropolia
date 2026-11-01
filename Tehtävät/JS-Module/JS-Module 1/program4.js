const addElementToWebsite = (elementType, elementInnerText) => {
    const main_box = document.getElementById("Main_Box");

    const elementToCreate = document.createTextNode(elementInnerText);

    return main_box.appendChild(elementToCreate);
}

const returnRandomRoom = (studentName) => {
    const randomRoomIndex = Math.floor(Math.random() * 4) + 1;
    let selectedRoom = String();
    switch(randomRoomIndex) {
        case 1:
            selectedRoom = "Rohkelikko";
            break;
        case 2:
            selectedRoom = "Luihuinen";
            break;
        case 3:
            selectedRoom = "Puuskupuh";
            break;
        case 4:
            selectedRoom = "Korpinkynsi";
            break;
    }
    console.log("Random room index is " + randomRoomIndex + " and the room is " + selectedRoom);
    return addElementToWebsite("p", `${studentName} your room is ${selectedRoom}`);
}

const studentName = prompt("Hello! Write your name: ");
returnRandomRoom(studentName);

