// 카운터 state의 그룹
// 초기 상태값 필요

const initState = {
    number:0
}

// const [number, setNumber] = useState(0);


// 리듀서 생성
// 리듀서 : 'state에 변화를 일으키는' 함수
// state를 액션의 타입에 따라 변경하는 함수
// 인자에는 state와 액션을 받음
// 액션은 state를 어떻게 수정할건지, 업데이트할건지 정하는 객체
const counter = (state = initState, action) => {
    // switch문을 통해서 액션 타입에 따라 제어를 함
    switch (action.type){
        case "onIncrease":
            // 객체를 리턴해야 함
            return {
                number: state.number + 1,
            }
        case "onDecrease" :
            return {
                number: state.number - 1,
            }

        // 아무것도 안할 떼
        default:
            return state;
    }

}

// 생성한 모듈 밖으로 내보내기
export default counter;