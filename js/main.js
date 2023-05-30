var tasks=document.getElementById("tasks")
var submit =document.getElementById("submit")
var mood = 'Add Task'


var listcontainer;
if(localStorage.getItem("ourtasks")==null){
 listcontainer=[]
}else{
    listcontainer=JSON.parse(localStorage.getItem("ourtasks"))
    displaytasks()
}

function addtask(){
var type = tasks.value
if(mood=== 'Add Task'){
    if(tasks.value!=""){
    listcontainer.push(type)
}else{
    null
}
}else{
    listcontainer[index]=type
    mood='Add Task'
    submit.innerHTML='Add Task'
}
localStorage.setItem("ourtasks" , JSON.stringify(listcontainer))

displaytasks()
clear()
}

function displaytasks(){
var tasklist=""
for(var i=0; i<listcontainer.length; i++){
    tasklist += `
<div class="task">
<div class="content">
<input type="text"
id="text"
class="text px-3"
value="${listcontainer[i]}"

readonly

>
</div>
<div class="action">
<button onclick="edit(${i})" id="edit" class="edit">Edit</button>
<button onclick="deleterow(${i})" class="delete">Delete</button>
</div>
</div>`
}
document.getElementById("Tasks").innerHTML=tasklist
}

function clear(){
    tasks.value=""
}

function deleterow(i){
listcontainer.splice(i,1)
localStorage.setItem("ourtasks" , JSON.stringify(listcontainer))
displaytasks()

}

function edit(i){
    
// if(document.getElementById("edit").innerText.toLowerCase()=="edit"){
    tasks.value=listcontainer[i]
    // document.getElementById("text").removeAttribute("readonly")
    document.getElementById("text").focus()
    submit.innerHTML='Update'
    mood ='Update'
    // document.getElementById("text").style.color="#ec4899"
    // document.getElementById("edit").innerText="Save"
// }
// else{
    // document.getElementById("text").setAttribute("readonly","readonly")
    // document.getElementById("edit").innerText="Edit"
    // document.getElementById("text").style.color="white"
    
// }
index=i
}
