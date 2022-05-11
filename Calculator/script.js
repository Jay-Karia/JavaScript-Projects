let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
      } else if (e.target.innerHTML == "C") {
        string = "";
      } else if (e.target.innerHTML == "D") {
        string = string.slice(0, -1);
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
      }
      document.querySelector(".txt-field").value = string;
    } catch {
      document.querySelector(".txt-field").value = "Invalid Equation";
    }
  });
});
