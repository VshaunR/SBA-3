


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
let div= document.createElement('div');
let input = document.createElement('li');
let date = document.createElement('li');
date.textContent= userDate;
let del = document.createElement('button');
input.textContent= userInput;
div.appendChild(input)
div.appendChild(date)
div.appendChild(del)
div.setAttribute('class','list-item')
del.setAttribute('id',count);
input.setAttribute('id',count);
date.setAttribute('id',count);
del.textContent=`Delete`


todoList.appendChild(div);


obj={
  item:input.textContent,
  date:date.textContent,
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

let filter = document.getElementById('filter-list')
let filterForm = document.getElementById('filter-form');
let filterId= document.getElementById('filter-id');
let filterDate= document.getElementById('filter-date')
filterForm.addEventListener('submit',(event)=>{
event.preventDefault();


renderById(filterId.value)

renderByDate(filterDate.value)
});

function renderById(id){
  let div= document.createElement('div');

  div.setAttribute('class','filter-item')
arrayObj.forEach((item)=>{
  if(item.id==id){
    div.innerHTML =`
    <li>${item.item}</li>
    <li>${item.date}</li>
      <li>${item.id}</li>
    `
    filter.appendChild(div)
  }

});

  
};

function renderByDate(date){
  arrayObj.forEach((item)=>{
    if(item.date===date){
      filter.innerHTML =`
      <li>${item.item}</li>
      <li>${item.date}</li>
    
      `
    }
 
  });
};