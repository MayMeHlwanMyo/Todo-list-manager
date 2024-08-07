import "./style.css";
import todo from "./src/todo.js"
import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4());
const app = new todo();
app.init();
