
const checkButton = document.getElementById("check-btn");
const resultDisplay =document.getElementById("result");

const checkString = () =>{
const inputText = document.getElementById("text-input").value;
const regex = /[\s-'),_.(-"/]+/g ;
const lowerString = inputText.toLowerCase();
const finalString = lowerString.replace(regex, "");
const arrayChars = finalString.split("");
const arrayChars2 = [...arrayChars];
const reverseChars = arrayChars2.reverse();
const reverseString = reverseChars.join("");
  if (finalString ===""){ 
    alert("Please input a value")
  }

   else if (finalString === reverseString ){ 
    return resultDisplay.innerHTML = `${inputText} is a palindrome!`
  }
  else{
    return resultDisplay.innerHTML = `${inputText} is not a palindrome`
  };



};
