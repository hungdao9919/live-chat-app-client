import React from 'react';
import ReactDOM from 'react-dom/client';  
import reportWebVitals from './reportWebVitals';
import ChatBox from './components/ChatBox';
import GlobalStyles from './components/GlobalStyles';
import ChatboxNhap from './components/ChatboxNhap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <GlobalStyles>
      <ChatBox/>
      {/* <ChatboxNhap/> */}
    </GlobalStyles>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
