import { createStore } from 'redux';

const initState = {
    sideBarCollapse: false
}
/**
 * 创建reducer
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SIDEBAR_COLLAPSE": //修改sidebar状态
            console.log("collapse")
            return { sideBarCollapse: !state.sideBarCollapse }
        default:
            return state
    }

}

/**
 * 创建action，可以改变state的指令
 */
const actions = {
    collapse: () => {
        return { type: 'SIDEBAR_COLLAPSE' }
    }
}

/**
 * 使用createStore方法，创建store
 */
const store = createStore(reducer, actions);

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState(), "sideBarCollapse")
);

unsubscribe();
export default store;