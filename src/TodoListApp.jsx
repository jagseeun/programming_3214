import "./todolist.css"
import Button from "./components/Button.jsx"
import Checkbox from "./components/Checkbox.jsx"
import TodoItemEmpty from "./components/TodoItemEmpty.jsx"

function TodoListApp() {
    return (
        <div className="todo">


            <h1 className="todo__title">Todo List App</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일 목록을 입력하세요." className="todo__input" />
                <Button type="submit" className="todo__button todo__button--add">추가</Button>
            </form>

            <ul className="todo__list">
                <TodoItemEmpty/>
                <li className="todo__item todo__item--completed">
                    <Checkbox type="checkbox" className="todo__check" id="1" />
                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp 