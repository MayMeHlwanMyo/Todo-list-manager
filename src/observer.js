import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer= () => {
    console.log("I am observer");
    // I will watch list group

const job = () => {
        // console.log("u change in listGroup");
        updateTaskTotal();
        updateDoneTaskTotal();
    };
    
const observerOptions = {
            childList: true,
            subtree: true,
            attributes: true,
          };
    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup,observerOptions);
}


export default observer;