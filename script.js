// Assignment Code
let generateBtn = document.querySelector("#generate");

// Objects
let randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Windows variables
let hasUpper;
let hasLower;
let hasNumbers;
let hasSymbol;
let leng; 

// Generator function
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
};

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    
  // window prompt for the length of the password
  let passLength = window.prompt("Enter hte length of the password from 8 to 128 characters.");

  if (passLength >= 8  && passLength <= 128) {
    console.log(passLength + " is valid")
  } else {
    alert("The length of the password needs to be between 8 and 128 characters.")
    return;
  }
  // change string to number for the passLength variable
  leng = +passLength; 
  console.log("The length of the password is a " + typeof length);

  // windows confirm criterias
  hasUpper = window.confirm("Do you want uppercase letters?");
  hasLower = window.confirm("Do you want lowercase letters?");
  hasNumbers = window.confirm("Do you want any numbers?");
  hasSymbol = window.confirm("Do you want symbols characters?");
  
  // Password Generator
  let passwordText = document.querySelector("#password");
  
  passwordText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumbers, 
    hasSymbol, 
    leng
  );
  
  function generatePassword(lower, upper, number, symbol, leng) {
    let generatedPassword = '';

    let typesCount = lower + upper + number + symbol;
    console.log('typesCount: ', typesCount)

    let typeArray = [{ lower }, { upper }, { number }, { symbol }].filter 
    (
      item => Object.values(item)[0]
    );
    console.log('typeArray: ', typeArray)

    if(typesCount === 0) {
      console.log("No criteria where selected")
      alert("You need to choose at least one criteria!")
      return;
    }
    
    for(let i = 0; i < leng; i += typesCount) {
      typeArray.forEach(type => {
        let funcName = Object.keys(type)[0];
        console.log('funcName: ', funcName)

        generatedPassword += randomFunc[funcName]();
      });
    }

    console.log(generatedPassword.slice(0, leng));

    passwordText.value = generatedPassword.slice(0, leng);
  } 

});
