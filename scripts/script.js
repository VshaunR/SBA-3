let menu = document.getElementById('menu');
let main= document.querySelector('main')
let menuList= document.querySelectorAll('.links')





menu.addEventListener('click',(e)=>{

  menuList.forEach((item)=>{
    // console.log(item.classList)
    if(e.target.classList.contains(`Home`)){
      displayHome();
    }else if(e.target.classList.contains(`About`)){
      displayAbout();
    }else if(e.target.classList.contains(`Sign-up`)){
      displaySignUp();
    }
  });
});


function displayHome(arg){
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
    <input type='email' id='email' placeholder='Enter Email'>
    <input type='text' id='userName' placeholder='Enter Your Name'>
    <input type='password' id='password' placeholder='Enter Password'>
    <input type ='submit' value='Sign-up' >
    
    </form>
  </div>

`

main.innerHTML =HTML;
let signUp = document.getElementById('signUp-form');
signUp.addEventListener('submit',(e)=>{
  e.preventDefault();
});
console.log(signUp)
}
function displayPics(){

  let srcArr=[
    {
      src:'',
      alt:''
    }, {
      src:'',
      alt:''
    },
    {
      src:'',
      alt:''
    },
    {
      src:'',
      alt:''
    }
  ]
  let HTML =`
  
  <div class="main-container">
      
  
  </div>


`
}
function displayCakes(arg){  let HTML =`
  
  <div class="main-container">
      
  
  </div>


`}

function generateHTML(arg){

  

}