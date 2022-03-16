function scuberGreetingForFeet(someValue){
  // Write your code here!
  if ( someValue <= 400){
    return ("This one is on me!");
  }
  if (someValue > 2000 && someValue < 2500){
    return ("I will gladly take your thirty bucks.")
  }
  else if (someValue > 2500){
    return ("No can do.")
  }
}


function ternaryCheckCity(checkCity){
  // Write your code here!
  return checkCity === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch(tipAmount){
    case "generous":
      return ("Thank you so much.");
      break;
    case "not as generous":
      return ("Thank you.")
      break;
    default:
      return ("Bye.")
      break;
  }
}