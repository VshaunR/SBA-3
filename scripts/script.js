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
  let list = document.querySelector('list');
  let entry = document.createElement('input');
  let edit = document.createElement('input');
  let del = document.createElement('input');
  entry.value = userInput;
// list.setAttribute('id',count);
edit.setAttribute('type','submit');
edit.setAttribute('value','Edit');
del.setAttribute('type','submit');
del.setAttribute('value','Delete');
del.setAttribute('class',count);
edit.setAttribute('class',count);
entry.setAttribute('class',count);
todoList.appendChild(entry);
todoList.appendChild(edit);
todoList.appendChild(del);

count++;
todoList.addEventListener('click',(e)=>{
  e.preventDefault();
 
})

delList(del,entry,edit)
editList(entry,edit)
// let li= document.createElement('li');
// let edit = document.createElement('button');
// let del = document.createElement('button');

// del.textContent= 'Delete';
// edit.textContent= 'Edit';
// del.setAttribute('class',count);
// edit.setAttribute('class',count);
// li.setAttribute('class',count);
// let listId ;
// let delId
// console.log(delId,listId)
// li.textContent= userInput
// todoList.appendChild(li)
// li.appendChild(edit);
// li.appendChild(del);

//  count ++
//   editInput(edit,li)
//   delList(del,li)

}

function delList(del,entry,edit){
  del.addEventListener('click',(e)=>{
    // console.log(e.target.parentElement.className)
    let parentClass=entry.className;
    console.log(entry.className)
    let childClass=e.target.className;
    // console.log(e.target.className)
    if(parentClass==childClass){
        del.remove(del)
        entry.remove(entry)
        edit.remove(edit)
    }
  });
};


function editList(entry,edit){
  let input;
  entry.addEventListener('input',(e)=>{
    // console.log(e.target.parentElement.className)
    console.log(edit)
    let parentClass=entry.className;
    console.log(entry.className)
    let childClass=e.target.className;
    console.log(e.target.className)
    if(parentClass==childClass){
      entry.focus()
       input= entry.value;
      console.log(input)
      edit.addEventListener('click',()=>{
        userInput.focus();
      })
    }
  });

};

