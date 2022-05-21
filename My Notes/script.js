// Other Variables
let clickNum = 0;
let clickNum2 = 0;
let numClick = 0;

// Globals
let titles = [];
let descriptions = [];
let pubs = [];
let dates = [];

let dataObj = {};

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
// var delNote = document.querySelector(".delete");
// var shareNote = document.querySelector(".share");
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
  if ((numClick == 1 && clickNum2 == 1) || clickNum == 1) {
    ordered.innerHTML = Number(ordered.innerHTML, 10);
    description.value += ordered.innerHTML;
  } else {
    description.value += "\n" + ordered.innerHTML;
  }
  ordered.innerHTML = Number(ordered.innerHTML, 10) + 1;
});

clearDate.addEventListener("click", () => {
  clickSound.play();
  date.value = "";
});

clearPub.addEventListener("click", () => {
  clickSound.play();
  publisher.value = "";
});

saveNote.addEventListener("click", () => {
  otherClickSound.play();
  // if (notes == "") {
  //   dataObj = [];
  // } else {
  //   dataObj.push({
  //     'title': noteTitle.value,
  //     'description': description.value,
  //     'publisher': publisher.value,
  //     'date': date.value,
  //   })
  // }
  // notesObj = [];
  // notesObj = JSON.stringify(dataObj);
  // notesObj.push(JSON.stringify(dataObj));

  dataObj = {
    title: noteTitle.value,
    description: description.value,
    publisher: publisher.value,
    date: date.value,
  };
  let notes = localStorage.getItem("notes");

  localStorage.setItem("notes", notes + JSON.stringify(dataObj));

  let notesObj = [];
  notesObj = localStorage.getItem("notes").split("}");
  console.log(notesObj);

  titles.push(noteTitle.value);
  descriptions.push(description.value);
  pubs.push(publisher.value);
  dates.push(date.value);

  description.value = "";
  publisher.value = "";
  date.value = "";
  noteTitle.value = "";

  let html = "";

  let index = notesObj.length;

  for (let i = 0; i <= index-1; i++) {
    console.log(i);
    noteTitle = document.getElementsByClassName("noteTitle")[0];
    description = document.querySelector("#description");
    date = document.querySelector("#date");
    publisher = document.querySelector(".publisher");
    html += `<div class="savedNote">
        <div class="savedNoteTitle" align="center">${titles[i]}</div>
        <textarea name="description" id="savedNoteDescription" cols="30" rows="10" readonly>${descriptions[i]}</textarea>
        <div class="savedNotePublisher"><strong>By: </strong>${pubs[i]}</div>
        <div class="savedNoteDate"><strong>On: </strong>${dates[i]}</div>
        <button class="delete button" id="${i})" onclick="deleteNote(this.id, notesObj)">Delete</button>
        <button class="share button" id="${i}">Share</button>
        </div>`;
  }
  let notesElm = document.getElementsByClassName("allNotes")[0];
  notesElm.innerHTML = html;
});
