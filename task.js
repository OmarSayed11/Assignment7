let score2 = prompt("Enter your exam score(using Switch Case):");

let number2 = Number(score2);

document.write("<h2>Using Switch Statement</h2>");
switch (true) {
  case isNaN(number2):
    console.log("Not a Number ❌");
    document.write("Not a Number ❌");
    break;
  case number2 > 100 || number2 < 0:
    console.log("Invalid Score ❌");
    document.write("Invalid Score ❌");
    break;
  case number2 === 100:
    console.log("Perfect Score 🏆");
    document.write("Perfect Score 🏆");

    break;
  case number2 >= 85:
    console.log("You got a A 🎉");
    document.write("You got a A 🎉");
    break;
  case number2 >= 75:
    console.log("You got a B 🎉");
    document.write("You got a B 🎉");
    break;
  case number2 >= 65:
    console.log("You got a C 📜");
    document.write("You got a C 📜");
    break;
  case number2 >= 50:
    console.log("You got a D ✌️");
    document.write("You got a D ✌️");
    break;
  default:
    console.log("You got a F 😲");
    document.write("You got a F 😲");
}
document.write("<h2>Using If Statement</h2>");
let score = prompt("Enter your exam score(using If condition):");

let number = Number(score);
if (isNaN(number)) {
  console.log("Not a Number ❌");
  document.write("Not a Number ❌");
} else if (number > 100 || number < 0) {
  console.log("Invalid Score ❌");
  document.write("Invalid Score ❌");
} else if (number === 100) {
  console.log("Perfect Score 🏆");
  document.write("Perfect Score 🏆");
} else if (number >= 85) {
  console.log("You got a A 🎉");
  document.write("You got a A 🎉");
} else if (number >= 75) {
  console.log("You got a B 🎉");
  document.write("You got a B 🎉");
} else if (number >= 65) {
  console.log("You got a C 📜");
  document.write("You got a C 📜");
} else if (number >= 50) {
  console.log("You got a D ✌️");
  document.write("You got a D ✌️");
} else {
  console.log("You got a F 😲");
  document.write("You got a F 😲");
}
