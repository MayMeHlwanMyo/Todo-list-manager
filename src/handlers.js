import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const addTaskBtnHandler = () => {
  if (textInput.value.trim()) {
    addList(textInput.value);
  } else {
    alert("U must input task");
  }
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    if (textInput.value.trim()) {
      addList(textInput.value);
    } else {
      alert("U must input task");
    }
  }
};

export const deleAllHandler = () => {
  if (confirm("Are you sure to remove all lists ?")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => list.remove());
  }
};

export const doneAllHandler = () => {
  if (confirm("Are you sure to done all lists ?")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};
