function TodoListApp() {
    return (
        <>
            <h1>Todo List App</h1>
            <form action="">
                <input type="text" placeholder="할 일 목록을 입력하세요." />
                <button>Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor=""> 옷싸기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
                <li>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor=""> 잠자기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </>
    )
}

export default TodoListApp