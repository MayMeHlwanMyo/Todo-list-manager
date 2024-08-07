import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export const updateTaskTotal = () => {
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
}

export const updateDoneTaskTotal = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
}

export const createNewList = (currentTask) =>{
    const list = listTemplate.content.cloneNode(true);
    list.querySelector(".list").id = "list"+ uuidv4();
    list.querySelector(".list-task").innerText = currentTask;
          return list;
    };
    
export  const deleteList = (listId) => {
      const currentList =document.querySelector(`#${listId}`);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then ((result) => {
        if (result.isConfirmed) {
            currentList.classList.add("animate__animated","animate__zoomOut");
            currentList.addEventListener("animationend", () => {
            currentList.remove();
              
          });
        }
      });
    };

    export const editList = (listId) => {
        const currentList =document.querySelector(`#${listId}`);
        const ListDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task ")
        const listEditBtn = currentList.querySelector(".list-edit-btn");
      
          listEditBtn.setAttribute("disabled",true);
          ListDoneCheck.setAttribute("disabled",true);
          const currentTask = listTask.innerText;
          const newTaskInput = document.createElement("input");
          newTaskInput.className = "border border-stone-950 font-mono px-1 py-1 w-[180px] focus-visible:outline-none";
          newTaskInput.value = currentTask;
          listTask.after(newTaskInput);
          newTaskInput.focus();
          listTask.classList.add("hidden");
      
          newTaskInput.addEventListener("blur",() => {
            listEditBtn.removeAttribute("disabled");
            ListDoneCheck.removeAttribute("disabled");
      
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            newTaskInput.remove();
      });
      
          newTaskInput.addEventListener("keyup",(event) => {
          if(event.key === "Enter"){
          listEditBtn.removeAttribute("disabled");
          ListDoneCheck.removeAttribute("disabled");
          
          listTask.innerText = newTaskInput.value;
          listTask.classList.remove("hidden");
          newTaskInput.remove();
          }
      });
      }
      
      export const updateList = () => {
        
      }
      
      export const doneList = (listId) => {
        const currentList =document.querySelector(`#${listId}`);
        const ListDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task ")
        const listEditBtn = currentList.querySelector(".list-edit-btn");
        
          listTask.classList.toggle("line-through");
          currentList.classList.add("duration-200")
          currentList.classList.toggle("opacity-20");
          currentList.classList.toggle("scale-90");
          if(ListDoneCheck.checked){
            listEditBtn.setAttribute("disabled",true);
          }else{
            listEditBtn.removeAttribute("disabled");
          }
          // updateDoneTaskTotal();
       }
      
    export const addList = (text) => {
        listGroup.append(createNewList(text));
        textInput.value = null;
        // updateTaskTotal();
      }