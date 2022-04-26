

const numberofitemsel=document.getElementById('num-of-navitems');

const  numberofitems=parseInt(numberofitemsel.value);

const body=document.body;
const demosection=document.getElementById('demo');


const savebtn=document.getElementById('save');
savebtn.addEventListener('click',()=>{
    let ul =document.createElement("ul");
// append to body 
ul.classList.add('navbar')


demosection.insertAdjacentElement('afterbegin',ul);

   //body.append(ul);
   // create list items 
   
   for(let i=0;i<Math.floor(Number(numberofitemsel.value));i++) {
    let li = document.createElement("li");
    let navlink=document.createElement('a');
    navlink.classList.add('navlinks');
    li.classList.add('navitem');

    navlink.innerText="im a link"
    navlink.href='#';

    // append to ul
    ul.appendChild(li);
    li.appendChild(navlink);

     
   }
});