/* eslint-disable import/no-anonymous-default-export */
const initialState=[111,2,333];
export default function lists (state = initialState, action) {
const {type,payload={}}=action;
    switch (type){
      case 'CHANGE_LIST':
      return [...state,payload];
      default:
        return state;
    }
}