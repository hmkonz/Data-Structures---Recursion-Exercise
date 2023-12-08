/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. Set default values of 'idx' and 'maxLength' to 0 */

function longest(words, idx = 0, maxLength = 0) {
  /** Recursive function */

  // once recursed over every 'word' in 'words', return maxLength
  if (idx === words.length) return maxLength;

  // Math.max() finds the largest number between the length of 'word' in 'words' at 'idx' (words[idx].length) and maxLength
  maxLength = Math.max(words[idx].length, maxLength);
  // call recursive function 'longest' with 'words' array, idx+1 and 'maxLength' passed in as parameters so can loop over the next 'word' in 'words' to see if its length is the longest. Only can continue looping until idx === words.length
  return longest(words, idx + 1, maxLength);

  /** Iterative function */

  // let maxLength = words[0].length;
  // for (let word of words) {
  //   let count = 0;

  //   for (let char of word) {
  //     count += 1;
  //     if (count > maxLength) {
  //       maxLength = count;
  //     }
  //   }
  // }
  // return maxLength;
}

/** everyOther: return a string with every other letter. Set default value of 'idx' to 0 and 'newString' to an empty string  */

function everyOther(str, idx = 0, newStr = "") {
  // once recursed over every 'char' in 'str', return newStr
  if (idx >= str.length) return newStr;
  // add char at str[idx] to newStr
  newStr += str[idx];
  // call recursive function 'everyother' with 'str', idx+2 and 'newStr' passed in as parameters so can loop over everyother char in 'str' (thus idx+2) and add it to 'newStr'. Only can continue looping until idx >= str.length
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. Set default value of 'leftIdx' and to 0 and 'rightIdx' to 1 minus the length of 'str' */

function isPalindrome(str, leftIdx = 0, rightIdx = str.length - 1) {
  // convert 'str' to all lowercase letters
  str = str.toLowerCase();

  // if recurse over 'str' until leftIdx >= rightIdx, that means all the chars at str[leftIdx] have been the same as the letters at str[rightIdx] and therefore 'str' is a palindrome
  if (leftIdx >= rightIdx) return true;

  // recurse through 'str' and see if the char at leftIdx is the same as the char at rightIdx (str[leftIdx]) === str[rightIdx]). If so, call recursive function 'isPalindrome' with str, leftIdx +1 and rightIdx-1 passed in as parameters; otherwise return false if chars are not the same
  if (str[leftIdx] === str[rightIdx]) {
    return isPalindrome(str, leftIdx + 1, rightIdx - 1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // if recursed through whole arr and arr[idx] never equaled 'val' then return -1
  if (idx === arr.length) return -1;
  // if item in arr at idx equals 'val' return idx
  if (arr[idx] === val) return idx;
  // if item in arr at idx does not equal 'val' call recursive function findIndex with arr, val and idx+1 passed in as parameters
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reversedString = "", idx = 0) {
  // if the length of reversedString equals the length of str then all characters in str have been added to reversedString so return reversedString
  if (reversedString.length === str.length) return reversedString;
  // add to reversedString the character at index = str.length-1-idx (adds characters from the end to the beginning of 'str')
  reversedString += str[str.length - 1 - idx];
  // call recursive function revString so can continue recursing until all the characters in 'str' are added to reversedString by incrementing idx by 1
  return revString(str, reversedString, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // initialize newArray to an empty array
  let newArray = [];
  // loop over every key in 'obj' passed in
  for (let key in obj) {
    // if the value of 'key' is a string, push the value into newArray
    if (typeof obj[key] === "string") newArray.push(obj[key]);
    // if the value of 'key' is an object (an object within 'obj' passed in, push the flattened  result of recursive function gatherStrings with the value of 'key' passed in as a parameter.

    // (i.e. obj =  {firstName: "Lester", favoriteNumber: 22, moreData: {lastName: "Testowitz"}} with 'moreData', a key and {lastName: "Testowitz"}, the value.  Without the spread operator in front of gatherStrings, the object gets pushed to newArray as an array => newArray = ["Lester", ["Testowitz"]]. When add the spread operator as shown below, the result of gatherStrings gets spread out into strings => newArray = ["Lester", "Testowitz"]
    if (typeof obj[key] === "object") newArray.push(...gatherStrings(obj[key]));
  }

  return newArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  // if left and right pointers cross (leftIdx moves past the rightIdx) val isn't in arr
  if (leftIdx > rightIdx) return -1;

  // assign middleIdx to the middle index of 'arr' or 1 to the left if (leftIdx+rightIdx)/2 isn't a whole number
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  // assign middleVal to the value of the middleIdx
  let middleVal = arr[middleIdx];
  // if the value of the middleIdx equals 'val', return its index (middleIdx). We found our val!
  if (middleVal === val) return middleIdx;
  // if the value of middleIdx is less than 'val', middleVal is too small so look at the right side of 'arr' for 'val' (move leftIdx to the right at middleIdx + 1)
  if (middleVal < val) {
    return binarySearch(arr, val, middleIdx + 1, rightIdx);
  }
  // if the value of middleIdx is greater than 'val', middleVal is too big so look at the left side of 'arr' for 'val' (move rightIdx to the left at middleIdx-1)
  return binarySearch(arr, val, leftIdx, middleIdx - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
