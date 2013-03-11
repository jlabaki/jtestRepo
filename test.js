'use strict';

console.log('welcome to js within eclipse');
hello();

function hello() {
  /*
   * console.log('hello !'); var sentence = "cherries, oranges, apples, bananas."; console.log('result :' +
   * sentence.split(",", 3).length); var sent = sentence.split(",", 3); for( var i = 0; i < sent.length; i++)
   * console.log('\n sent ' + i + sent[i]); sentence = "This is one sentence. This is a sentence with a list of items:
   * cherries, oranges, apples, bananas."; var val = sentence.split(/:/); console.log(val.length);
   * console.log(val[0].split(/\./)[0]);
   */

  // var dateElement = document.getElementById("date");
  /*
   * var today = new Date(); var utcDate = today.toUTCString(); dateElement.innerHTML = "<p>local datetime: " + today + "
   * UTC datetime: " + utcDate + "</p>"; console.log("<p>local datetime: " + today + " UTC datetime: " + utcDate + "</p>");
   * var futureDate = new Date(); futureDate.setDate(futureDate.getDate() + 10); console.log("futureDate= " +
   * futureDate); var pastDate = new Date(); pastDate.setFullYear(pastDate.getFullYear() - 18); console.log("pastDate= " +
   * pastDate);
   */

  // var num = 255;
  // console.log("num= " + num.toString(2));
  var charSets = new Array("ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab");

  // apply function to each array element
  charSets.forEach(replaceElement);
  console.log("charSets is  : " + charSets);
}
function replaceElement(element, index, array) {
  if(element == "ab")
    array[index] = "**";
}

var reverseArray = function(x, indx, str) {
  return indx == 0 ? str : reverseArray(x, --indx, (str += " " + x[indx]));
  ;
}
var arr = new Array('apple', 'orange', 'peach', 'lime');
var str = reverseArray(arr, arr.length, "");
console.log("str is  : " + str);
var arr2 = [ 'car', 'boat', 'sun', 'computer' ];
str = reverseArray(arr2, arr2.length, "");
console.log("str is  : " + str);
var name = "Joelle";

function greetingMaker(greeting) {
  function addName(name) {
    return greeting + " " + name;
  }
  return addName;
}
//Now, create new partial functions
var daytimeGreeting = greetingMaker("Good Day to you");
var nightGreeting = greetingMaker("Good Evening");
//if daytime alert(daytimeGreeting(name));
console.log("daytime : " + daytimeGreeting(name));
console.log("nightGreeting : " + nightGreeting(name));
//if night alert(nightGreeting(name));

/*
 * console.log('test'); (function() { console.log('testing anonymous function'); })();
 */

function Book(title, author) {
  var title = title;
  var author = author;
  this.getTitle = function() {
    return "Title: " + title;
  }
  this.getAuthor = function() {
    return "Author: " + author;
  }
}
function TechBook(title, author, category) {
  var category = category;
  this.getCategory = function() {
    return "Technical Category: " + category;
  }
  Book.apply(this, arguments);
  this.getBook = function() {
    return this.getTitle() + " " + author + " " + this.getCategory();
  }
}
(function() {
  // chain the object constructors
  TechBook.prototype = new Book();
  // get all values
  var newBook = new TechBook("The JavaScript Cookbook", "Shelley Powers", "Programming");
  console.log("************" + newBook.getBook());
  // now, individually
  console.log(newBook.getAuthor());
  console.log(newBook.getTitle());
  console.log(newBook.getCategory());
}());
