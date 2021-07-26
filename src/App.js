import React from "react"
import './App.css';
import { connect } from "react-redux";
import Count from "./components/count"

const App = ({ count }) => {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
      <Count />
    </div>
  );
}
//storeの中で設定したstateをAppコンポーネントにデータを渡せる
//propsへと変換(map)する
const mapStateToProps = (state) => {
  return { count: state.count }
}

//あるコンポーネントからReduxのstoreにアクセスするためにconnectを使用
//connectの引数にはmapSteteToprops関数を指定
export default connect(mapStateToProps)(App)