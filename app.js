const reviews = [
{
    id:1,
    name: "Susan Smith",
    job: "Web Developer",
    img:"person1.jpg",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Ad molestiae iste cum veniam autem. Nam, molestiae. Obcaecati  animi esse adipisci minima porro eveniet sunt possimus aspernatur! Ipsum accusantium debitis qui omnis beatae dolores odit! ",

},
{
    id:2,
    name: "Adam Smith",
    job: "Web Designer",
img:"person2.jpg",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Ad molestiae iste cum veniam autem. Nam, molestiae. Obcaecati  animi esse adipisci minima porro eveniet sunt possimus aspernatur! Ipsum accusantium debitis qui omnis beatae dolores odit! ",

},
{
    id:3,
    name: "Jack Smith",
    job: "Designer",
img:"person3.png",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Ad molestiae iste cum veniam autem. Nam, molestiae. Obcaecati  animi esse adipisci minima porro eveniet sunt possimus aspernatur! Ipsum accusantium debitis qui omnis beatae dolores odit! ",

},
{
    id:4,
    name: "Georges Smith",
    job: "Art Director",
img:"person4.png",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Ad molestiae iste cum veniam autem. Nam, molestiae. Obcaecati  animi esse adipisci minima porro eveniet sunt possimus aspernatur! Ipsum accusantium debitis qui omnis beatae dolores odit! ",

},

]
// ? select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//  ? set starting item
let currentItem = 3;
// ? load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})
//  ? show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// ? show next person 
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

// ? show prev person
prevBtn.addEventListener('click', function(){
currentItem--;
if(currentItem < 0){
    currentItem = reviews.length - 1;;
}
    showPerson(currentItem)
})

// ? show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem)
})