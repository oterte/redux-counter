# Redux

1. useState의 불편함 <br>
어떤 컴포넌트에서 생성한 state를 다른 컴포넌트로 보고자 할때 우리는 props를 통해서 부모 컴포넌트에서 자식 컴포넌트로 그 값을 보내줬다.<br>
그런데 props로 state를 공유하는 방법에는 불편한 점이 있다.
- 컴포넌트에서 컴포넌트로 state를 보내기 위해서는 반드시 부모관계가 되어야 한다.
- 최상위 컴포넌트에서 하위 컴포넌트로 값을 보내고자 할때도 반드시 부모 컴포넌트를 거쳐야만 한다. <br>
  정작 부모 컴포넌트에서는 그 값이 필요가 없어도 단순히 하위 컴포넌트에게 전달하기 위해 불필요하게 거쳐야만 한다.

2. Redux?<br>
위와 같은 불편함을 해소하기 위해 나온 중앙 state 관리소를 사용할 수 있게 도와주는 전역 상태관리 라이브러리.<br>
state를 공유하고자 할때 부모관계가 아니어도 되고, 중간에 의미없이 컴포넌트를 거치지 않아도 된다.<br>
자식 컴포넌트에서 만든 state를 부모 컴포넌트에서도 사용할 수 있다.<br>

* Global state와 Local state

- Local State -> 컴포넌트에서 useState를 이용해서 생성한 state. <br>좁은 범위 안에서 생성된 state. <br>useState로 생성된 state가 해당됨.
- Global State -> 컴포넌트에서 생성되지 않고 중앙화 된 특별한 곳에서 state들이 생성됨. <br>쉽게 말해 중앙 state 관리소.<br>
리덕스로 생성한 state

## Redux 설정

1. 폴더 구조
- redux -> redux와 관련된 코드를 모두 보관
- config ->  redux 설정 관련 파일 전부 보관. 
- configStore -> Store파일을 만들어 중앙 관리소 역할을 하게 함.
- modules -> state의 그룹. Todolist를 만든다고 한다면, todolist에 필요한 state들이 모여있는 파일.(삭제, 제목, 생성 등등을 관리)

## Redux Hoos

1. useSelector
- 중앙 store에 저장되어 있는 값을 읽어오고 싶을때 사용하는 hook

2. useDispatch
- action 객체를 가지고 store에 던져주는 역할을 함
- 컴포넌트에서 어떤 action을 가지고 store로 던져주는 역할. 
- 중앙 데이터 관리소에 특정 데이터를 처리할 것을 요청하는 역할을 한다.
- action에 있는 type에 따라 reducer가 state를 제어함
- dispatch가 action 객체를 store에 던짐 -> store는 action 객체의 type에 따라 state를 변경해주는 작업을 함.