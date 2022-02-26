// getting all the elements

let math = document.getElementById("math");
let science = document.getElementById("science");
let english = document.getElementById("english");
let computer = document.getElementById("computer");
let total_marks = document.getElementById("total_marks");
let percentage = document.getElementById("percentage");
let grade = document.getElementById("grade");
let my_table = document.getElementById("my_table");
let error = document.getElementById("err");

function getResult() {
  let mathValue = Number(math.value);
  let scienceValue = Number(science.value);
  let englishValue = Number(english.value);
  let computerValue = Number(computer.value);
  // if the input field is blank

  if (
    math.value === "" ||
    science.value === "" ||
    english.value === "" ||
    computer.value === ""
  ) {
    console.log("please fill the input");
    error.innerHTML = "Please Enter all input";
    return false;
  }

  // checking the input value should be between 0 - 100

  if (
    math.value < 0 ||
    math.value > 100 ||
    science.value < 0 ||
    science.value > 100 ||
    english.value < 0 ||
    english.value > 100 ||
    computer.value < 0 ||
    computer.value > 100
  ) {
    error.innerHTML = "Please enter the valid value";

    return false;
  }

  //   calculating total marks
  let calculated_total_marks =
    mathValue + scienceValue + englishValue + computerValue;

  total_marks.innerHTML = calculated_total_marks;

  //   calculating total percentage
  let totalPercentage = calculated_total_marks / 4;
  percentage.innerHTML = `${totalPercentage}%`;

  if (totalPercentage <= 33) {
    grade.innerHTML = "Fail";
    my_table.style.backgroundColor = "red";
    my_table.style.color = "white";
  } else if (totalPercentage <= 60) {
    grade.innerHTML = "Second Class";
    my_table.style.backgroundColor = "yellow";
  } else if (totalPercentage <= 75) {
    grade.innerHTML = "First Class";
    my_table.style.backgroundColor = "aqua";
  } else {
    grade.innerHTML = "Distinction";
    my_table.style.backgroundColor = "lightgreen";
  }

  error.innerHTML = "Marks has been added succefully";
}
