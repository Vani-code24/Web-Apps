
import "../styles/main.scss";



let taskContainer = document.getElementById("task__container");
let taskAdd = document.querySelector('.task__add');
let lists = document.getElementById("task__lists");
let taskTitle = document.getElementById('task__title');
let taskTime = document.getElementById('task__time');
let taskDescription = document.getElementById('task__description');
let taskBox = document.getElementById('task__box');
let addBtn= document.getElementById('addBtn');
let cancelBtn = document.getElementById('cancelBtn');
let errormsg = document.getElementById('error-msg');
function updateElem(e){
    let editBtn = document.querySelectorAll(".editicn");
    let trashBtn = document.querySelectorAll(".trashicn");
    for(let i=0;i<editBtn.length;i++){
        editBtn[i].addEventListener("click",(e)=>{
        //     taskContainer.className="show";
        //  taskTitle.value = editBtn[i].parentElement.childNodes[0].nodeValue;
        //  taskTime.value = editBtn[i].parentElement.childNodes[2].nodeValue;
        //  taskDescription.value = editBtn[i].parentElement.childNodes[3].nodeValue;
        //     taskContainer.addEventListener("submit",()=>{
        //         editBtn[i].parentElement.childNodes[0].nodeValue = taskTitle.value;
        //         console.log(taskTitle.value);


            // })

            lists.children[i].contentEditable=true;
            editBtn[i].contentEditable=false;
            trashBtn[i].contentEditable=false;
        })
    }   
    }








//Add the elements
 function newElement(){
   
    let listel = document.createElement("li");
    let taskList = lists.appendChild(listel);
    let lineBreak = document.createElement("br");
    let title = document.createTextNode(taskTitle.value);
    let tm = document.createTextNode(taskTime.value);
    let td = document.createTextNode(taskDescription.value);
    let spanelem = document.createElement("span"); 
    let spanel = document.createElement("span"); 
    let newLine = document.createElement("br"); 
    let trashtext = document.createTextNode("\u00D7");
    let edittext = document.createTextNode("\u270E");


            if(taskTitle.value=="" || taskDescription.value=="" || taskTime.value==""){
                errormsg.className="show";
                return false;
            }
            else{   
               
                listel.className ="bord"
                taskList.appendChild(title);
                listel.appendChild(lineBreak);
                taskList.appendChild(tm);
                listel.appendChild(newLine);
                taskList.appendChild(td); 
            
                spanelem.className="trashicn";
                spanel.className="editicn";
                 spanelem.appendChild(trashtext);
                spanel.appendChild(edittext);
                taskList.append(spanelem,spanel);   
                errormsg.className="hide";
                taskContainer.className="hide";
               
                return true;
               
            }

          
     
    }

  
  
 //Delete the elements
 function removeElem(){
    let closeBtn = document.querySelectorAll(".trashicn");
   
    for(let i=0;i<closeBtn.length;i++){
        closeBtn[i].addEventListener("click",function(e){
            closeBtn[i].parentNode.remove();
        })
    }
    
  
   }
   
   
   
    
    

   

   cancelBtn.onclick = function(){
       taskContainer.className="hide";
   }


    taskContainer.addEventListener('submit',(e)=>{
        if(taskTime.value != "" && taskTitle.value != "" && taskDescription.value !=""){
            taskTime.value="";
            taskTitle.value="";
            taskDescription.value="";
        }
      
        e.preventDefault();
    
    })
   
    
    taskAdd.addEventListener('click',(e)=>{
       taskContainer.classList.toggle('show');
    })    
  

 addBtn.addEventListener('click',(e)=>{
   
    newElement();
   removeElem();
   updateElem();
  
   });






   
