let String1 = "Hello world this is my first string!";
let Array1 = String1.split(" ");
console.log(Array1)

let String2 = "Apple and Pear and Banana and Orange";
let Array2 = String2.split(" and ");
console.log(Array2)

let Fruits = ['Apple' , 'Pear' , 'Banana' , 'Orange'];
Fruits.forEach(function(item){
    let sentence = "I like eating " + item + "!<br>";
    $("body").append(sentence)
})

let MyString = "Hello, World!";
let YourString = "Nice to Meet You!";
console.log(MyString.startsWith("Hello"))
console.log(MyString.startsWith("You"))
console.log(YourString.startsWith("Nice"))
console.log(YourString.startsWith("You"))

console.log(MyString.endsWith("World!"))
