let title = document.getElementById('title');
title.textContent ='Todo List';


let todoForm = document.getElementById('todo-form');
let userInput = document.getElementById('user-input');
let todoList= document.getElementById('todo-list');



todoForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(userInput.value ===''){
    userInput.focus();
    return ;
  }
  add(userInput.value)
  userInput.value='';
  userInput.focus()




});

let count=0;
function add(userInput){

let li= document.createElement('li');
let del = document.createElement('button');
del.textContent= 'Delete';
del.setAttribute('class',count);
li.setAttribute('class',count);
let listId ;
let delId
console.log(delId,listId)
li.textContent= userInput
todoList.appendChild(li)
li.appendChild(del);
 count ++

 delList(del,li)

}

function delList(del,li){
  del.addEventListener('click',(e)=>{
    // console.log(e.target.parentElement.className)
    let parentClass=li.className;
    console.log(li.className)
    let childClass=e.target.className;
    console.log(e.target.className)
    if(parentClass==childClass){
        del.remove(li)
     
    }
  });
}