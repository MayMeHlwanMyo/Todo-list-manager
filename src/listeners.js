import {
  addTaskBtnHandler,
  deleAllHandler,
  doneAllHandler,
  listGroupHandler,
  textInputHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  deleAll,
  doneAll,
  listGroup,
  textInput,
} from "./selectors.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  listGroup.addEventListener("click", listGroupHandler);
  textInput.addEventListener("keyup", textInputHandler);
  deleAll.addEventListener("click", deleAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};
export default listener;
