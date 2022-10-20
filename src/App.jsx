import { useEffect, useState , useContext} from 'react';
import './App.css'
import HikariCodeContext from './main';

function App() {
  //"setCount"はset関数
  //useState()はレンダリングすることが可能になる。
  const [count, setCount] = useState(0);
  const hikaricodeInfo = useContext(HikariCodeContext);
  

  const handleClick = () => {
    setCount(count + 1);
  }
  //useEffect()は発火のタイミングを決めることができる(変数が変わった時・ページがリロード(マウント)された時・アンマウントされた時)
  //第2引数にどのタイミングで発火するのかを示す
  //空のリストにすることでページがマウントされた時に発火することになる
  //[]内にcountを入れることで、countの値が更新・変更する時にコールバック関数"()=>{~}"が呼ばれる。
  useEffect(() => {
    console.log("Hello Hooks")
    //setCount(count + 1);  //useEffectのコールバック関数にsetCount()を入れると,第2引数[count]の依存関係により無限ループが起こるので注意
  },[count])

  return (
    <div className="App">
      <h1>useState useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{hikaricodeInfo.name}</p>
      <p>{hikaricodeInfo.age}</p>
    </div>
  )
}

export default App
