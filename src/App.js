
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import counter from './redux/modules/counter';

function App() {
  // 여기서 store에 접근하여 counter의 값을 읽어오고 싶다.
  // 그럴때 useSelector 사용
  // 매개변수로 함수가 들어감
  // 그 함수는 현재 state값(중앙 저장소 안에 있는 state) 전체를 가지고 있음
  const counter = useSelector((state) => {
    return state.counter;
    // counter 만을 가지고 오고 싶다면 return state.counter
  });

  // dispatch 가져오기
  const dispatch = useDispatch()
  return (
    <>
      <div>
        현재 카운트 : {counter.number}
      </div>
      <button onClick={() => {
        dispatch({
          type:"onIncrease",
        })
      }}>+</button>
      <button onClick={() => {
        dispatch({
          type:"onDecrease",
        })
      }}>-</button>
    </>
  );
}

export default App;
