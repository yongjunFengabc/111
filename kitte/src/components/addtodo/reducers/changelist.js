/* eslint-disable import/no-anonymous-default-export */
const initialState=['吃饭','写程序','工作'];
export default function lists (state = initialState, action) {
const {type,payload={}}=action;
    switch (type){
      case 'CHANGE_LIST':
      return [...state,payload];
      default:
        return state;
    }
}