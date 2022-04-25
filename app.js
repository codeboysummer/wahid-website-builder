

const numberofitemsel=document.getElementById('num-of-navitems');

const  numberofitems=parseInt(numberofitemsel.value);

const body=document.body;


const savebtn=document.getElementById('save');
savebtn.addEventListener('click',()=>{
    let ul =document.createElement("ul");
// append to body 
ul.classList.add('navbar')




   body.append(ul);
   // create list items 
   
   for(let i=0;i<Math.floor(Number(numberofitemsel.value));i++) {
    let li = document.createElement("li");
    li.classList.add('navitem')
    li.innerText = "hi";

    // append to ul
    ul.appendChild(li);
     
   }
});