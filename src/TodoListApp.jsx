import "./todolist.css"
import Button from "./components/Button.jsx"
import Checkbox from "./components/Checkbox.jsx"
import TodoItemEmpty from "./components/TodoItemEmpty.jsx"
import TodoHeader from "./components/TodoHeader.jsx" //import 추가 안했어서 오류 났었음!!
import TodoAdder from "./components/TodoAdder.jsx" 
import TodoItem from "./components/TodoItem.jsx"
import TodoList from "./components/TodoList.jsx"
function TodoListApp() {
    return (
        <div className="todo">

            <TodoHeader/>
            <TodoAdder/>

            <TodoList/>
        </div>
    )
}

export default TodoListApp 