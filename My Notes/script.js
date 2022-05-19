// Other Variables
let clickNum = 0;
let clickNum2 = 0;
let numClick = 0;

// Text Boxes
let noteTitle = document.getElementsByClassName("noteTitle")[0];
let description = document.querySelector("#description");
let date = document.querySelector("#date");
let publisher = document.querySelector(".publisher");

// Buttons
let clearTitle = document.querySelector(".clearTitle");
let clearDescription = document.querySelector(".clearDescription");
let clearAll = document.querySelector(".clearAll");
let bullet = document.querySelector(".bullet");
let arrow = document.querySelector(".arrow");
let ordered = document.querySelector(".ordered");
let clearDate = document.querySelector(".clearDate");
let clearPub = document.querySelector(".clearPub");
var delNote = document.querySelector(".delete");
var shareNote = document.querySelector(".share");
let saveNote = document.querySelector(".save");

// Sounds
let clickSound = new Audio("sounds/click.mp3");
let otherClickSound = new Audio("sounds/otherClick.mp3");

// Functions
clearTitle.addEventListener("click", () => {
    clickSound.play();
    noteTitle.value = "";
});

clearDescription.addEventListener("click", () => {
    clickSound.play();
    description.value = "";
    clickNum = 0;
    clickNum2 = 0;
    numClick = 0;
    ordered.innerHTML = 1;
});

clearAll.addEventListener("click", () => {
    otherClickSound.play();
    noteTitle.value = "";
    description.value = "";
    date.value = "";
    publisher.value = "";
    clickNum = 0;
    clickNum2 = 0;
    numClick = 0;
    ordered.innerHTML = 1;
});

bullet.addEventListener("click", () => {
    otherClickSound.play();
    clickNum += 1;
    clickNum2 += 1;
    if (clickNum == 1 && clickNum2 == 1) {
        description.value += "•";
    } else {
        description.value += "\n•";
    }
});

arrow.addEventListener("click", () => {
    otherClickSound.play();
    clickNum2 += 1;
    clickNum += 1;
    if (clickNum2 == 1 && clickNum == 1) {
        description.value += "‣";
    } else {
        description.value += "\n‣";
    }
});

ordered.addEventListener("click", () => {
    otherClickSound.play();
    clickNum += 1;
    clickNum2 += 1;
    numClick += 1;
    if (numClick == 1 && clickNum2 == 1 && clickNum == 1) {
        ordered.innerHTML = Number(ordered.innerHTML, 10);
        description.value += ordered.innerHTML;
    } else {
        ordered.innerHTML = Number(ordered.innerHTML, 10) + 1;
        description.value += "\n" + ordered.innerHTML;
    }
});

clearDate.addEventListener("click", () => {
    clickSound.play();
    date.value = "";
});

clearPub.addEventListener("click", () => {
    clickSound.play();
    publisher.value = "";
});

saveNote.addEventListener("click", function (e) {
    otherClickSound.play();
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    dataObj = {
        "title": noteTitle.value,
        "description": description.value,
        "publisher": publisher.value,
        "date": date.value
    }
    //   notesObj.push(description.value);
    notesObj.push(dataObj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showItems();
});

function showItems(notesObj) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (e, index) {
        noteTitle = document.getElementsByClassName("noteTitle")[0];
        description = document.querySelector("#description");
        date = document.querySelector("#date");
        publisher = document.querySelector(".publisher");
        html +=
            `<div class="savedNote">
          <div class="savedNoteTitle" align="center">${e.title}</div>
          <textarea name="description" id="savedNoteDescription" cols="30" rows="10" readonly>${e.description}</textarea>
          <div class="savedNotePublisher"><strong>By: </strong>${e.publisher}</div>
          <div class="savedNoteDate"><strong>On: </strong>${e.date}</div>
          <button class="delete button" id="del${index})">Delete</button>
          <button class="share button" id="share${index}">Share</button>
          </div>`;
    });
    let notesElm = document.getElementsByClassName('allNotes')[0];
    notesElm.innerHTML = html;
    description.value = "";
    publisher.value = "";
    date.value = "";
    noteTitle.value = "";
}

// function deleteNote(id, notesObj) {
//         console.log("delete fired");
// }

// onclick="deleteNote(${this.id}
