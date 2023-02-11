import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06(class)/NotificationList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>,
  document.getElementById('root')
)
/* 
chapter_04  Clock.jsx에서 변화되는 부분을 setInterval 함수를 이용하여 1000ms마다 render
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{ 
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
},1000); 
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
