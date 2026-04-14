import Button from "./Button.jsx"
import Checkbox from "./Checkbox.jsx"
export default function TodoItem(){
    return(
        <li className="todo__item">
            <Checkbox type="checkbox" className="todo__check" id="1" />
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
    )
}