import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//useContext用のデータ
const hikariInfo = {
  name : "hikari",
  age : 24,
};

//createContext() ・・・'react'のライブラリに用意してある関数
const HikariCodeContext = createContext(hikariInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  //下記の書式より、hikariInfoのデータをAppコンポーネントでも使えるようになる(App.jsxでuseContextを用いる)
  //valueには共有したいデータを指定
  <HikariCodeContext.Provider value = {hikariInfo}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HikariCodeContext.Provider>
);

export default HikariCodeContext;
