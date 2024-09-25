// let title = document.getElementById('title');
// title.textContent ='Todo List';


// let todoForm = document.getElementById('todo-form');
// let userInput = document.getElementById('user-input');
// let todoList= document.getElementById('todo-list');
// let userDate = document.getElementById('user-date');

// let day = new Date().getDay()

// let month = new Date().getMonth()
// let year = new Date().getFullYear();

// // console.log(month +1)


// todoForm.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   if(userInput.value ===''){
//     userInput.focus();
    
//     return ;
//   }
//   // let dateFormat= new Date(userDate.value);
//  console.log(userDate.value)
  
//   add(userInput.value,userDate.value)
//   userInput.value='';
//   userInput.focus()

  


// });

// let count=0;
// function add(userInput,userDate){
//   let list = document.querySelector('list');
//   let entry = document.createElement('input');
//   let edit = document.createElement('input');
//   let del = document.createElement('input');
//   let date = document.createElement('input')

//   console.log(date)
//   entry.value = userInput;
//   date.value=userDate
// // list.setAttribute('id',count);
// date.setAttribute('type','date')
// edit.setAttribute('type','submit');
// edit.setAttribute('value','Edit');
// del.setAttribute('type','submit');
// del.setAttribute('value','Delete');
// del.setAttribute('class',count);
// edit.setAttribute('class',count);
// entry.setAttribute('class',count);
// // date.setAttribute('class',count);
// todoList.appendChild(entry);
// todoList.appendChild(date);
// todoList.appendChild(edit);
// todoList.appendChild(del);


// count++;
// todoList.addEventListener('click',(e)=>{
//   e.preventDefault();
 
// })

// delList(del,entry,edit)
// editList(entry,edit)
// // let li= document.createElement('li');
// // let edit = document.createElement('button');
// // let del = document.createElement('button');

// // del.textContent= 'Delete';
// // edit.textContent= 'Edit';
// // del.setAttribute('class',count);
// // edit.setAttribute('class',count);
// // li.setAttribute('class',count);
// // let listId ;
// // let delId
// // console.log(delId,listId)
// // li.textContent= userInput
// // todoList.appendChild(li)
// // li.appendChild(edit);
// // li.appendChild(del);

// //  count ++
// //   editInput(edit,li)
// //   delList(del,li)

// }

// function delList(del,entry,edit){
//   del.addEventListener('click',(e)=>{
//     // console.log(e.target.parentElement.className)
//     let parentClass=entry.className;
//     console.log(entry.className)
//     let childClass=e.target.className;
//     // console.log(e.target.className)
//     if(parentClass==childClass){
//         del.remove(del)
//         entry.remove(entry)
//         edit.remove(edit)
//     }
//   });
// };


// function editList(entry,edit){
//   let input;
//   entry.addEventListener('input',(e)=>{
//     // console.log(e.target.parentElement.className)
//     console.log(edit)
//     let parentClass=entry.className;
//     console.log(entry.className)
//     let childClass=e.target.className;
//     console.log(e.target.className)
//     if(parentClass==childClass){
//       entry.focus()
//        input= entry.value;
//       console.log(input)
//       edit.addEventListener('click',()=>{
//         userInput.focus();
//       })
//     }
//   });

// };



let arrayObj=[

];



let todoForm = document.getElementById('todo-form');
let userInput = document.getElementById('user-input');
let userDate= document.getElementById('user-date');
let todoList= document.getElementById('todo-list');
todoForm.addEventListener('submit',(event)=>{
event.preventDefault()

add(userInput.value,userDate.value);
userInput.value=``
userDate.value=``
userInput.focus();
console.log(userInput.value);


});
let count =0;
function add(userInput,userDate){
let obj={}
let input = document.createElement('input');
let date = document.createElement('input');
date.value = userDate;
let del = document.createElement('input');
input.value = userInput;

del.setAttribute('type','submit');
del.setAttribute('id',count);
input.setAttribute('id',count);
date.setAttribute('id',count);
date.setAttribute('type','date');
del.setAttribute('value','delete');

todoList.appendChild(input);
todoList.appendChild(date);
todoList.appendChild(del);

obj={
  item:input.value,
  date:date.value,
  id:count
}
arrayObj.push(obj)
console.log(arrayObj)

delList(del,input,date,arrayObj);
// editList(input,date,arrayObj,count);
count ++;
}


function delList(del,input,date){
  del.addEventListener('click',(e)=>{
    // console.log(e.target.parentElement.className)
    let parentClass=input.className;
    let dateClass = date.className;
    console.log(input.className)
    let childClass=e.target.className;
    // console.log(e.target.className)
    if(parentClass==childClass && parentClass ==dateClass){
        del.remove(del);
        input.remove(input);
        date.remove(date);
        arrayObj.splice(Number(childClass),1)
        console.log(arrayObj);
        userInput.focus();
    }
  });
};

// function editList(input,date,arrayObj){
//   let newInput;
//   input.addEventListener('input',(e)=>{
//     // console.log(e.target.parentElement.className)
   
//     let parentClass=input.className;
//     console.log(input.className)
//     let childClass=date.className;
//     console.log(date.className)
//     if(parentClass==e.target.className){
//         input.focus()
//         newInput= input.value;
//         console.log(newInput);
//         let temp={}
//         let index;
//         arrayObj.filter((filtered)=>{
//           // console.log(filtered.id)
        
//         })
       
       
//     }
//   });
//   console.log(arrayObj)
// };
