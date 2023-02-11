import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 외부로 내보낸 store 사용하기
  // app이라는 컴포넌트가 provider의 지배권 안으로 들어가는 것
  // provider는 sotre를 기반으로 지배권 행사
  <Provider store={store}>
    <App />
  </Provider>
  
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
