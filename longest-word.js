// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.If there are two or more words that are the same length, return the first word from the string with that length.Ignore punctuation and assume sen will not be empty.Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
function longestWord(sen) {

    // code goes here  
    sen = sen.replace(/[^\w\s]/gi, '');
    var arr = sen.split(' ');
    var max = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;

}
console.log(longestWord("I love dogs"))