// 중앙 데이터 관리소 역할. State store 관리소 설정
// store안에는 state도 있고 리듀서도 있다.

import { createStore, combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/user";
// 리듀서를 하나로 모아서 한개로 만들어둔 기본 리듀서
// 인자는 객체형태로
// 인자로 modules에 넣어둔 state의 묶음들을 넣어줌
// 이 앱에서 관리하는 state의 집단들이 rootReducer로 들어오게 됨
const rootReducer = combineReducers({
    // 모듈에서 만든 리듀서를 가져와서 등록
    // 이렇게 하면 이 앱 전체에서 counter라는 리듀서를 사용하는 것

    counter,
    users:users,
});
// 중앙 데이터 관리소, 인자로는 리듀서의 묶음이 들어감
const store = createStore(rootReducer)

// 이렇게 만든 store를 앱 밖으로 내보내기

export default store;