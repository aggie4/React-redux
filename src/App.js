import './App.css';
/* import { useState } from 'react'; */
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
    /* const [count, setCount] = useState(0); */
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    // 함수를 매개변수로 받아온다
    // state 매개변수를 받아가지고 스토어이 있는 값들중에 count 값만 들고오겠다.
    const increase = () => {
        dispatch({ type: 'INCREMENT' });
        // 디스패치 라는 함수 , 액션을 던져야 한다.
        // 액션 = 단순한 오브젝트 , 객체 형태로 되어 있다, 룰이 있다 = 액션 안에는 타입(type)이라는 키가 있어야 되고 payload 가 있어야 된다
        // 타입 type = 액션의 이름 , 어떤 액션을 취할 건지 이름을 넘겨 준다
        /*  setCount(count + 1); */
    };
    const decrease = () => {
        dispatch({ type: 'DECREMENT' });
    };
    const cerase = () => {
        dispatch({ type: 'CERASE' });
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={cerase}>초기화</button>
            <Box />
        </div>
    );
}

export default App;

// 컴포넌트에서 스토어에 있는 값을 변경하려면 뉴스 디스페치(useDispatch) 라는 걸 가지고 액션으로 던져줘야 된다
