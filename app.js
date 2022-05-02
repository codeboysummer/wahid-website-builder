const numofnavItems=document.getElementById('num-of-navitems');
const backgroundcolornav=document.getElementById('colorpicker');
const textcolornav=document.getElementById('colorpickertext');
const savebtn=document.getElementById('save');
const resetbtn=document.getElementById('reset');
const demosection=document.getElementById('demo');
const backgroundorimage = document.querySelector('input[name="choice"]:checked');



savebtn.addEventListener('click',()=>{

    clear();
    createNavbar();
    createbackground();
    

});
resetbtn.addEventListener('click',()=>{

    demosection.innerHTML="";
});


let createbackground =()=>{
// make div and place at the end
let backgroundDiv= document.createElement("div");
backgroundDiv.classList.add('background');
// clear 
backgroundDiv.innerHTML='';

// placed as last child

demosection.insertAdjacentElement("beforeend",backgroundDiv);

// input element
let backgroundcolorelement = document.getElementById("backgroundcolorPicker");


// make input into background
backgroundDiv.style.backgroundColor=backgroundcolorelement.value;


};
// create image on choice

let createbackgroundimg=()=>{
    let backgroundDiv= document.createElement("div");
    backgroundDiv.classList.add('background');
    // clear div 
    backgroundDiv.innerHTML='';
}
let createbackgroundimgicon=()=>{
    

// take input and put as output
let bodybackgroundel= document.getElementById('background');


let backgroundcolorPicker=document.createElement('input');
bodybackgroundel.innerHTML='';
backgroundcolorPicker.type='file';
backgroundcolorPicker.setAttribute("id",'backgroundcolorPicker');

    // append
    bodybackgroundel.appendChild(backgroundcolorPicker)



};




// create icon 
function createbackgroundIcon(){
    console.log('hi');


    // create color input
    let bodybackgroundel= document.getElementById('background');


let backgroundcolorPicker=document.createElement('input');
bodybackgroundel.innerHTML='';
backgroundcolorPicker.type='color';
backgroundcolorPicker.setAttribute("id",'backgroundcolorPicker');

    // append
    bodybackgroundel.appendChild(backgroundcolorPicker)



   


}
let createNavbar= ()=>{

    
    // create nav components
    const navbar=document.createElement("ul");
    navbar.classList.add("navbar")



navbar.style.backgroundColor=backgroundcolornav.value;




    for(var i=0;i<Math.floor(Number(numofnavItems.value));i++){

        let listitem=document.createElement('li');
        listitem.classList.add("navitem")
         listitem.innerText=`item`;



         let navlink=document.createElement('a');
        navlink.style.color=textcolornav.value
        navlink.classList.add("navlinks");
         navlink.innerText=`link`;
         navlink.href="#";


        console.log(textcolornav.value);
         navbar.appendChild(listitem).appendChild(navlink);
         demosection.appendChild(navbar);
         



    }
 
    }


    let clear=()=>demosection.innerHTML='';







