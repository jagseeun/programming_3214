import { useState } from 'react';
import CounterApp from './CounterApp';
import TodoListApp from './TodoListApp';

function ButtonPageApp({ setPage }) {
    return(
        <>
        <h1>App 목록</h1>
        <ul>
            <li><button onClick={() => setPage('counterApp')} style={{width: '100px', height: '100px', fontSize: '1.1rem'}}>🔢<br></br>CounterApp</button></li>
            <li><button onClick={() => setPage('todolistApp')} style={{width: '100px', height: '100px', fontSize: '1.1rem'}}>📝<br></br>TodoListApp</button></li>
        </ul>
        </>
    )
}
export default function HomeApp(){
    const [page, setPage] = useState('home');

    return(
        <>
        {/*page가 home이면 <ButtonPageApp /> */}
        {page === 'home' && <ButtonPageApp setPage={setPage} />}
        {/*page가 home이 아니면 home으로 가는 버튼 만들자. */}
        {page !== 'home' && <button
            onClick={() => setPage('home')}
            style={{
                position: 'fixed',
                left: '10px',
                bottom: '10px',
                cursor: 'pointer',
                borderRadius: '8px',
                backgroundColor: '#eee',
                border: 'none',
                padding: '6px',
            }}
        >🏠 집으로</button>}
        {/*page가 counterApp이면 <CounterApp /> */}
        {page === 'counterApp' && <CounterApp />}
        {/*page가 todolistApp이면 <TodoListApp /> */}
        {page === 'todolistApp' && <TodoListApp />}
        </>
    )
}