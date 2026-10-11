const name = "Charisse";

switch (name) {
  case "Charisse":
    console.log("yo Tsong!");
    break;
  case "Ice":
    console.log("yo Ice!");
    break;
  default:
    console.log("name was not found");
}

// comparing only one variable
// not for complex conditions

const monthNumber = 3;

switch (monthNumber) {
  case 2:
  case 1:
  case 12:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  default:
    console.log("fall");
}

// alternative implementation

function getSeason(monthNumber) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Fall";
    default:
      return "Invalid Month Number";
  }
}

console.log(getSeason(6));
console.log(getSeason(0));

// one variable agains multiple values