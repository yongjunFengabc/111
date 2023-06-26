
const initialState=false;
export default function changeshow(state=initialState,action){
const { type, payload} = action;
   switch(type){
    case 'CHANGE_SHOW':
    return payload;
    default:
        return state;
   }

}