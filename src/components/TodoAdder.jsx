import Button from "./Button.jsx" //import 추가 안했어서 오류 났었음!! 근데 폴더까지 써서 또 다른 ㅇ에러가,,ㅋ
export default function TodoAdder() {
    return (
        <form className="todo__form">
            <input type="text" placeholder="할 일 목록을 입력하세요." className="todo__input" />
            <Button type="submit" className="todo__button todo__button--add">추가</Button> {/* Button은 컴포넌트라서 import 필요! */}
        </form>
    )
}