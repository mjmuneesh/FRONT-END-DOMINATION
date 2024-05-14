//1 .it is used to select any element
// let h1 = document.querySelector("h1");

//2. here style is used to give style to an element
// h1.style.color = "Blue";

//3. textcontent is used to add text to any element but it does not converts tags into html
// h1.textContent += "Muneesh";

//4. innerhtml is used to add text as well as convert tags into html
// h1.innerHTML += "<i>Muneesh</i>";

//5.this is used to add a class to any element
// h1.classList.add("makeitvoilet");

//6. this is used to remive a class from any element
// h1.classList.remove("makeitvoilet");

//7. create a element
// let img = document.createElement("img");
// img.src= "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg";
// img.classList.add("image")

//8. append a child into the element
// document.querySelector("body").appendChild(img)

//9. remove child from the element
// document.querySelector("body").removeChild(img)

//10. Event Listener

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     btn.textContent = "started...";
//     btn.style.backgroundColor = "aqua";
// })

let img1 = document.getElementById("one");
let img2 = document.getElementById("two");
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let src1 = img1.src;
  let src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});
