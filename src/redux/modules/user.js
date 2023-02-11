// 카운터 state의 그룹
// 초기 상태값 필요

const initState = {
    id:'',
    pw:''
}

// const [number, setNumber] = useState(0);


// 리듀서 생성
// 리듀서 : 'state에 변화를 일으키는' 함수
// state를 액션의 타입에 따라 변경하는 함수
// 인자에는 state와 액션을 받음
// 액션은 state를 어떻게 수정할건지, 업데이트할건지 정하는 객체
const users = (state = initState, action) => {
    // switch문을 통해서 조건 생성
    switch (action.type){
        // 아무것도 안할 떼
        default:
            return state;
    }

}

// 생성한 모듈 밖으로 내보내기
export default users;