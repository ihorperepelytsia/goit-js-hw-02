"use strict";

const findLongestWord = function(string) {
  let longestWord = string.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  });
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
