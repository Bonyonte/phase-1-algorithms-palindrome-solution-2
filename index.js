function reverseString(word){

  return word.split("").reverse().join("");
 }
function isPalindrome(word) {
  const reverseWord = reverseString(word);

  return word === reverseWord;
  // Write your algorithm here
}

/* 
  Add your pseudocode here

  if the word is the same as the one in reverse, then return true
reverse the input string
if the input string is same as the reverse input

return true

else

return false
*/

/*
  Add written explanation of your solution here

   Use split method so the string turns into an array with each letter.
  Now we can easily iterate over it with an array method
  such as .reverse. The goal is to see if the string is the same
  forwards and backwards. Then join the new flipped string, 
  and compare it with the orginal string to return true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
