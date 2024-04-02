console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n");


//Exercise One(1)  
let favnum = 5;

let ans = window.prompt("Guess a number");

if (ans < favnum) {
  console.log("Too low");
} else if (ans > favnum) {
  console.log("Too high");
} else {
  console.log("Congratulations");
}

//Exercise Two(2)

let birthMonth;
let winter;
let spring;
let summer;
let autumn;

winter = "You are a WINTER baby!!!";
spring = "You are a SPRING baby!!!";
summer = "You are a SUMMER baby!!!";
autumn = "You are an AUTUMN baby!!!";
  
birthMonth = window.prompt("What is your birth month");

switch (birthMonth) {
  case "January":
    console.log(winter);
    break;
  case "February":
    console.log(winter);
    break;
  case "March":
    console.log(winter);
    break;
  case "April":
    console.log(spring);
    break;
  case "May":
    console.log(spring);
    break;
  case "June":
    console.log(summer);
    break;
  case "July":
    console.log(summer);
    break;
  case "August":
    console.log(summer);
    break;
  case "September":
    console.log(summer);
    break;
  case "October":
    console.log(autumn);
    break;
  case "November":
    console.log(autumn);
    break;
  case "December":
    console.log(autumn);
    break;
  default:
    console.log("Input the correct month");

}
 
//Exercise Three(3)


    let typeId = "01";
    let colorId = "PU";
    let sizeId = "L";

    let type = "";
    let color = "";
    let size = "";    
  
    switch (typeId) {
      case "01":
        type = "Tank Top";
        break;
      case "02":
        type = "T-Shirt";
        break;
      case "03":
        type = "Long Sleeve";
        break;
      case "04":
        type = "Sweat Shirt";
        break;
      default:
        type = "Other";

    }
    
    switch (colorId) {
      case "BL":
        color = "Black";
        break;
      case "BLU":
        color = "Blue";
        break;
      case "RD":
        color = "Red";
        break;
      case "PU":
        color = "Purple";
        break;
      default:
        color = "White";

}
    

    switch (sizeId) {
      case "S":
        size = "Small";
        break;
      case "M":
        size = "Medium";
        break;
      case "L":
        size = "Large";
        break;
      case "XL":
        size = "Extra Large";
        break;
      default:
        size = "One Size Fits All";
    }


console.log(`Product: ${size} ${color} ${type}`);
