// 1.  when we create a method inside an object , then this keyword refers to the object itself and we can access any property of the object.

// let obj = {
//   name: function () {
//     console.log(this);
//   },
//   age: 25,
//   email: " muneesh@gmail.com",
// };
// obj.name();

//2. when we create function inside method in (es5), it refers to window.

// let obj2 = {
//   sayname: function () {
//     console.log(this);
//     // this keyword in the above refers to the object as this function is inside method
//     function childfnc() {
//       console.log(this);
//       // but here it still refers to the window as this function in es5 rebind itself to the window , so we can't access other properties
//     }
//     childfnc();
//   },
//   age: 29,
// };

// obj2.sayname();

//3. when we create function inside method in (es6), it refers to object.

// let obj3 = {
//     sayname: function () {
//       let user = ()=> {
//         console.log(this);
//     //    here this keyword refers to the object as it memorize it value as object , it says take this keyword value from the parent
//       }
//       user();
//     },
//   };

//   obj3.sayname();

//4. prototypal inheritance

//Any function in which you use This keyword and also use new keyword while calling the function , then a new blank object is created

// function makeHuman( name , age){
//   this.name = name,
//   this.age = age
// }

// makeHuman.prototype.printMyName = function(){
//   console.log(this.name)
// }

// let human1 = new makeHuman("Muneesh", 25)

// let human2 = new makeHuman("ashima" , 23)

//5. Closures

// any function which returns another function , and use any variable from parent function

// function abcd(){
//   var a = 12;
//   return function(){
//    console.log(a)
//   }
// }

//  abcd();

//  another example

// function abcd(){
//   let a = 26;
//   return setTimeout(function() {  //here setinterval executes after 2sec automatically
//     console.log(a)
//   }, 2000);
// }

// abcd();

//6. Event delegation

// when an event listener can handle many events of different element. like in the below example we added an event listener in the parent and it is handling events in different elements .

// let element = document.querySelector("#parent");

// element.addEventListener("click" , function(e){  // here (e) receives all the details of the event and by whom the event is being trigerred
// if(e.target.id === "play"){
//   console.log("song played")
// }
// else if(e.target.id === "pause"){
// console.log("song Paused")
// }
// });

// 7. SetTimeout

// console.log("hello1");
// console.log("hello2")
// setTimeout(()=>{
//     console.log("hello3")
// },1000)
// console.log("hello4")

// 8.setInterval

// let count = 0;
// const Interval1 = setInterval(()=>{
//     count++;
//     if(count <= 10){
//         console.log(count)
//     }else{
//         clearInterval(Interval1);
//     }
// },1000)

// 9. Fetch API

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((raw)=> {
//     return raw.json()
//     })
// .then((data)=>{
//     console.log(data[3])
//     }
// )

// 10. Axios API

// axios.get("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
// .then((results) =>{
//     console.log(results.data[0].url)
// })



// 11. Promises

// let parchi = new Promise(function (resolve, reject) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((rawdata) => {
//       return rawdata.json();
//     })
//     .then((result) => {
//             if (result[0].userId === 1) resolve();
//             else reject();
//     });
// });

// parchi
// .then(function() {
// console.log("user id 1 aagyi")
// })
// .catch(function(){
//     console.log("nhi aaye")
// })

// example 2 :-

// function getData(url) {
//   let promise = new Promise(function (res, rej) {
//     fetch(url)
//       .then((raw) => {
//        return raw.json();
//       })
//       .then((result) => {
//         res(result);
//       });
//   });

//   return promise;
// }

// getData("https://jsonplaceholder.typicode.com/posts")
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function () {
//     console.log("error");
//   });





// 12. Callbacks

// function callbackseekho(url , cb){
// fetch(url)
// .then(data => {
//   return data.json();
// })
// .then(results => {
//   cb(results);
// })
// }

// callbackseekho("https://jsonplaceholder.typicode.com/posts" , function(results){
//   console.log(results[0].title)
// });

// 13. Async / Await

//  async function abcd(){
//   let a = await fetch("https://jsonplaceholder.typicode.com/posts")
//   a = await  a.json()
//   console.log(a);
// }

// abcd();

// Example 2:-

// async function dataFetcher(url){
//   let data =  await fetch(url);
//   let result = await data.json();
//   return result
// };

// async function get(){
//   let finaldata = await dataFetcher("https://jsonplaceholder.typicode.com/posts");
//   console.log(finaldata)
// }

// get();



// 14. Generators

// function* generator(){
// console.log("start")
// yield 1
// console.log("we got the first value")
// yield 2
// console.log("we got second value")
// }

// let ans = generator();
// console.log(ans.next())
// console.log(ans.next())
// console.log(ans.next())



// Example 2 :-

// function* gen() {
//   for (let i = 0; i < 11; i++) {
//     yield i;
//   }
// }

// let result = gen();

// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);


// Web wrokers : in it if our main thread is busy , we can give heavy computation to the web worker so that the main thread can work efficiently. In it we send the data to another file and then when the work is send , we accept the file agian to main file.

// let nums = Array.from({length:1000},(_, b)=>b+1);
// const worker = new Worker("worker.js");

// worker.postMessage(nums);
// worker.onmessage = function(data){
//     console.log(data.data)
// }