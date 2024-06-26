// Create a function that, given a string, returns all of that string’s contents, but without blanks.
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlank(str) {
  return str.replace(/\s+/g, "");
}

var a = removeBlank("Pl ayTha tF u nkyM usi c");
console.log(a);

// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
  var string = str.split("");
  var int = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] % 1 == 0) {
      int += string[i];
    }
  }
  return int / 1;
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str) {
  return str
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase();
}

console.log(acronym("Live from New York, it's Saturday Night!"));

// Accept a string and return the number of non-space characters found in the string.
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(str) {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    }
  }
  return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Given a string array and value (length), remove any strings shorter than the length from the array.

function shorterStrings(arr, length) {
  for (i = 1; i < arr.length; i++) {
    if (arr[i].length < length) {
      arr.pop(arr[i]);
    }
  }
  return arr;
}

var b = shorterStrings(["zuma", "test", "one", "1"], 2);
console.log(b);
