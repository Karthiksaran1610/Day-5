//! DAY 5 TASK
/*1.
let myResume={
      "name": "KARTHIK",
      "email": "karthikkarthi1.d@gmail.com",
      "phone": 9384519195,
      "degree": "Bsc",
      "skills":"HTML,CSS,JAVASCRIPT",
      "Known language":"Tamil,English"
      }
  console.log(myResume);

  2.
  var myResume = [{
    "name": "KARTHIK",
    "email": "karthikkarthi1.d@gmail.com",
    "phone": 9384519195,
    "degree": "Bsc",
    "skills":"HTML,CSS,JAVASCRIPT",
    "Known language":"Tamil,English"  
  }];
  //for loop
  for ( var i=0;i<myResume.length;i++){
    var obj = myResume[i];
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.degree);
    console.log(obj.skills);
    console.log(obj["Known language"]);
  }

// for of
const data = Object.entries(myResume)
for(var [key,value]of data){
    console.log(value);
}

//for each
data.forEach(([key,value])=>console.log(value));

3.
WINDOW:-

*Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window.
*Well, the window is the first thing that gets loaded into the browser. This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.

DOCUMENT:-

*The Document object(DOM) is your html, aspx, php, or other document that will be loaded into the browser. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie.
*window is the global object you can reference any properties of it with just the property name,so you do not have to write down window.it will be figured out by the runtime.

SCREEN:-

The Window object also has a screen object with properties describing the physical display:
*screen properties width and height are the full screen
*screen properties availWidth and availHeight omit the toolbar
*screen is a small information object about physical screen dimensions.
*/