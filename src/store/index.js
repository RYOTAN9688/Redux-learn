import { createStore } from "redux";


const initialState = {
    count: 100,
}

//reducerはコンポーネント間で共有を行いたいデータを保持し、reducer関数の中で
//唯一共有したデータを変更できる
//reducerは現在のデータの情報を保持するstateを持つ。
//steteには初期値が必要となり、reducer関数を実行すると必ずstateを戻す。
const reducer = (state = initialState) => {
    return state;
}
//reducerが保持しているstateをstoreに保管
const store = createStore(reducer);

export default store;