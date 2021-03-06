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

saveNote.addEventListener("click", function (e) {
  otherClickSound.play();
  globalThis.dataObj;
  let notes = localStorage.getItem("notes");
  dataObj = {
    title: noteTitle.value,
    description: description.value,
    publisher: publisher.value,
    date: date.value,
  };

  titles.push(noteTitle.value);
  descriptions.push(description.value);
  pubs.push(publisher.value);
  dates.push(date.value);
  if (notes == "" || notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(dataObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  showItems();
});

function showItems() {
  // console.log(notesObj);
  let notes = localStorage.getItem("notes");
  if (notes == "" || notes == null) {
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
    html += `<div class="savedNote">
          <div class="savedNoteTitle" align="center">${e.title}</div>
          <textarea name="description" id="savedNoteDescription" cols="30" rows="10" readonly>${e.description}</textarea>
          <div class="savedNotePublisher"><strong>By: </strong>${e.publisher}</div>
          <div class="savedNoteDate"><strong>On: </strong>${e.date}</div>
          <button class="delete button" id="${index}" onclick="deleteNote(this.id)">Delete</button>
          <button class="share button" id="${index}"onclick="copyNote(this.id)">Copy</button>
          </div>`;
  });
  let notesElm = document.getElementsByClassName("allNotes")[0];
  notesElm.innerHTML = html;
  description.value = "";
  publisher.value = "";
  date.value = "";
  noteTitle.value = "";
}

function deleteNote(id) {
  otherClickSound.play();
  let notes = localStorage.getItem("notes");
  if (notes == "" || notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(id, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  console.log(localStorage.notes);
  let html = "";
  notesObj.forEach(function (e, index) {
    noteTitle = document.getElementsByClassName("noteTitle")[0];
    description = document.querySelector("#description");
    date = document.querySelector("#date");
    publisher = document.querySelector(".publisher");
    html += `<div class="savedNote">
          <div class="savedNoteTitle" align="center">${e.title}</div>
          <textarea name="description" id="savedNoteDescription" cols="30" rows="10" readonly>${e.description}</textarea>
          <div class="savedNotePublisher"><strong>By: </strong>${e.publisher}</div>
          <div class="savedNoteDate"><strong>On: </strong>${e.date}</div>
          <button class="delete button" id="${index}" onclick="deleteNote(this.id)">Delete</button>
          <button class="copy button" id="${index}" onclick="copyNote(this.id)">Copy</button>
          </div>`;
  });
  let notesElm = document.getElementsByClassName("allNotes")[0];
  notesElm.innerHTML = html;
}

function copyNote(id) {
  otherClickSound.play();
  navigator.clipboard.writeText("Title: " + notesObj[id]['title'] + "\n\nDescription: " + notesObj[id]['description'] + "\nBy: " + notesObj[id]['publisher'] + "\nOn:" + notesObj[id]['date']);
}
