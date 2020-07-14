document.write("All console methods explanation is in JS file :) ");

/*
console.groupEnd()    //The console. groupEnd() method indicates the end of a message group. ... group() method to start a message group. Tip: Use the console.

console.info()    //The console.info() method writes a message to the console. Tip: When testing the console methods, be sure to have the console view visible (press F12 to view the console).

console.log() //The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.


console.table()   //Displays tabular data as a table.

console.time()   //It is used to starts a timer that is used to compute the time taken by a piece of code or function. The method console. timeEnd() is used to stop the timer and output the elapsed time in milliseconds to stdout.

console.timeEnd() //The console object has time() and timeEnd() methods that help with analyzing performance of pieces of your code. You first call console. time() by providing a string argument, then the code that you want to test, then call console. timeEnd() with the same string argument.

console.timeLog() //Whenever you want the intermediate timer value, as well as extra information like variable or object values, you can use console.timeLog

console.timeStamp()   //Adds a single marker to the browser's Performance or Waterfall tool. This lets you correlate a point in your code with the other events recorded in the timeline, such as layout and paint events. You can optionally supply an argument to label the timestamp, and this label will then be shown alongside the marker.

console.trace()   //The console interface's trace() method outputs a stack trace to the Web Console. Note: This feature is available in Web Workers. See Stack traces in the console documentation for details and examples.

console.warn()    //warn() function from console class of Node. js is used to display the warning messages on the console. It prints to stderr with newline. Note: This function is an alias of console.

console.assert()  //The console. assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. Note: This feature is available in Web Workers.

console.clear()   //Use console. clear() method. This method clears the console and displays console was cleared message.

console.count()   //The console. count() method logs the number of times that this particular call to count() has been called. Note: This feature is available in Web Workers

console.countReset()  //The console.countReset() method is an inbuilt application programming interface of the console module which is used to reset the count for the specific label passed to it as a parameter.

console.debug()   //The console method debug() outputs a message to the web console at the "debug" log level. The message is only displayed to the user if the console is configured to display debug output. Note: This feature is available in Web Workers.

console.dir() //The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects. In other words, console.

console.dirxml()  //console. dirxml(object) prints an XML representation of the descendant elements of object if possible, or the JavaScript representation if not. Calling console. dirxml() on HTML and XML elements is equivalent to calling console.

console.error()   //The console. error() method writes an error message to the console. The console is useful for testing purposes. Tip: When testing this method, be sure to have the console view visible (press F12 to view the console).

console.exception()   //When a JavaScript statement generates an error, it is said to throw an exception. Instead of proceeding to the next statement, the JavaScript interpreter checks for exception handling code. If there is no exception handler, then the program returns from whatever function threw the exception.

console.group()   //The console. group() method indicates the start of a message group. All messages will from now on be written inside this group.

console.groupCollapsed()  //The console. groupCollapsed() method indicates the start of a collapsed message group. Click the expand button to open the message group. All messages will from now on be written inside this group.

*/


//Q2. var let const
//Var      function scope
 
var name = "Prasad";    //String

var age = 24;          //number
var canFly = false;     //boolean
var languages = ['Hindi','English','Marathi'];//array

var friends = {name = "Vishal",hobby:"Coding"};//obj

//var a;   //undefined will come if you didnt give any value

var a = null;  //null is not equal to zero
console.log(a);


//Let      block scope
//allows you to maintain the scope of level
//its like a block of code
//if you are using the let keyword then it will be working and assigning the values to the variable inside the let curly braces only
{
    let city;  //let also allow you to assign the value later to the variable
    let name = "Sai Sir";
    console.log("Using let: "name);//this will print Sai Sir
}
console.log(name) //this will print the name mentioned at the start of the program






//const    
//in const you have to give the value to every variable it is compulsory
//also in const you cant reassign the value to the variable
const country = "INDIA"

console.log(country);

//country = "UK" // this will give error because u cant reassign it

const fruits = ["mango","apple"];
console.log(fruits);
fruits.push('banana');
console.log(fruits);
//you cant replace the whole array but you can push the value to it if its an const array type




//name a variable
/* 
1. variable name cannot start with a number
2. it can start with letters , $ , _
3. $ is mainly used in JQuery
4. _ is used to declare private variables [OOPS in JS]

*/


/*
1. camelCase   **************
2. kebab-case
3. snake_case
4. PascalCase
*/

//Q.3  brief on available datatypes

/*In Javascript, there are five basic, or primitive, types of data. The five most basic types of data are strings, numbers, booleans, undefined, and null. We refer to these as primitive data types. A single variable can only store a single type of data. 


*/