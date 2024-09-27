let menu = document.getElementById('menu');

//query selector
let main= document.querySelector('main');
let menuList= document.querySelectorAll('.links');

let todo = document.getElementById('todo');
let item = document.getElementById('todo');

// let srcArr=[]
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


todo.addEventListener('submit',(e)=>{



})



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

  main.innerHTML=``;
  todo.innerHTML=``


srcArr.forEach((src)=>{
 
 let img= document.createElement('img')
  img.setAttribute('class','pics');
  img.setAttribute('src',src.src);
  img.setAttribute('alt',src.alt)
main.appendChild(img)
})
 
// picContainer.style.display='flex';
// picContainer.style.flexWrap='wrap';
// picContainer.style.gap='30px'
// picContainer.style.margin='1rem'

     


};


