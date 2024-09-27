let menu = document.getElementById('menu');

//query selector
let main= document.querySelector('main');
let menuList= document.querySelectorAll('.links');

let todo = document.getElementById('todo');
let item = document.getElementById('item');
let listsItems= document.getElementById('lists-items')
// let srcArr=[]

menu.addEventListener('click',(e)=>{


    // console.log(item.classList)
    if(e.target.classList.contains(`Home`)){
      displayHome();
    }else if(e.target.classList.contains(`About`)){
      displayAbout();
    }else if(e.target.classList.contains(`Sign-up`)){
      displaySignUp();
    }else if (e.target.classList.contains('Pics')){
      displayPics();
    }

});





function displayHome(){
  let src= './img/tenor.gif'
  let HTML =`
  
  <div class="main-container">
      <img src=${src} alt= "hero img" class="hero-img">
      <ol class="hero-desc">
        <li>Click On</li>
        <li>Menu</li>
        <li>Links for Different Displays</li>
      </ol>
  </div>
`;

main.innerHTML =HTML;
  

};
function displayAbout(){
  let HTML =`
  
  <div class="main-container">
      
      <ol class="about">
        <li>Test DOM Knowledge</li>
        <li>Template Everything</li>
        <li>Make Something Fun</li>
      </ol>
  </div>


`
main.innerHTML =HTML;

}
function displaySignUp(){
  let HTML =`
  
  <div class="main-container">
    <form id='signUp-form'>
    <input type='email' id='email' placeholder='Enter Email' required>
    <input type='text' id='user-name' placeholder='Enter Your Name' minlength='7' required>
    <input type='password' id='password' placeholder='Enter Password' minlength='8' required>
    <input type ='submit' value='Sign-up' id='sub-btn'>
    
    </form>
  </div>

`

main.innerHTML =HTML;
let signUp = document.getElementById('signUp-form');
let email = document.getElementById('email');
let userName = document.getElementById('user-name');
let password = document.getElementById('password');
console.log(email)
signUp.addEventListener('submit',(e)=>{
  e.preventDefault();
  email.value=``;
  userName.value=``;
  password.value=``;
});

};


let picContainer = document.getElementById('main-pic');
function displayPics(){
  let srcArr=[
    {
      src:'./img/dog.jpg',
      alt:'a dog'
    }, {
      src:'./img/house.jpg',
      alt:'a house'
    },
    {
      src:'./img/tired.jpg',
      alt:'so tired'
    },
    {
      src:'./img/random-people.jpg',
      alt:'so random'
    }
  ];
  
  main.innerHTML=``;
  todo.innerHTML=``


srcArr.forEach((src)=>{
 
 let img= document.createElement('img')
  img.setAttribute('class','pics');
  img.setAttribute('src',src.src);
  img.setAttribute('alt',src.alt)
  main.appendChild(img)
})
 

};





let arrayObj=[

];



let todoForm = document.getElementById('todo');
let userInput = document.getElementById('item');
// let userDate= document.getElementById('user-date');
let todoList= document.getElementById('lists-items');




todoForm.addEventListener('submit',(event)=>{
event.preventDefault()
if(userInput.value ==""){
  alert('Submit a Todo!')
  return
}
add(userInput.value);
userInput.value=``;
userInput.focus();
console.log(userInput.value);


});






let count =0;
function add(userInput){
let obj={}
let div= document.createElement('div');
let input = document.createElement('li');

let del = document.createElement('button');
input.textContent= userInput;
div.appendChild(input)
div.appendChild(del)
div.setAttribute('class','list-item')
del.setAttribute('id',count);
input.setAttribute('id',count);

del.textContent=`Delete`


todoList.appendChild(div);


obj={
  item:input.textContent,
  id:count
}
arrayObj.push(obj)
console.log(arrayObj)

delList(del,input,arrayObj);

count ++;
}


function delList(del,input){
  del.addEventListener('click',(e)=>{
   
    let parentClass=input.className;

    console.log(input.className)
    let childClass=e.target.className;
  
    if(parentClass==childClass){
        del.remove(del);
        input.remove(input);
      
        arrayObj.splice(Number(childClass),1)
        console.log(arrayObj);
        userInput.focus();
    }
  });
};

let filter = document.getElementById('filter-list')
let filterForm = document.getElementById('filter-form');
let filterId= document.getElementById('filter-id');
let filterDate= document.getElementById('filter-date')
// filterForm.addEventListener('submit',(event)=>{
// event.preventDefault();


// renderById(filterId.value)

// renderByDate(filterDate.value)
// });

// function renderById(id){
//   let div= document.createElement('div');

//   div.setAttribute('class','filter-item')
// arrayObj.forEach((item)=>{
//   if(item.id==id){
//     div.innerHTML =`
//     <li>${item.item}</li>
//     <li>${item.date}</li>
//       <li>${item.id}</li>
//     `
//     filter.appendChild(div)
//   }

// });

  
// };

// function renderByDate(date){
//   arrayObj.forEach((item)=>{
//     if(item.date===date){
//       filter.innerHTML =`
//       <li>${item.item}</li>
//       <li>${item.date}</li>
    
//       `
//     }
 
//   });
// };

let footer = document.getElementById('footer-container');

let footerTabs= footer.querySelectorAll('div');

footer.addEventListener('click',(e)=>{
  
  footerTabs.forEach((tab)=>{
   
    if(e.target.classList.contains('active')){
      e.target.classList.remove('active')
    }else{
      
      e.target.classList.add('active')
  
    }
  });
  footerTabs.forEach((tab)=>{
    console.log(tab)
    if(tab.classList.contains('active')){
      tab.style.backgroundColor=`${tab.textContent}`
      tab.style.color=`aqua`
    }else{
      tab.style.backgroundColor=`transparent`
      tab.style.color=`white`
    }
  })

});

