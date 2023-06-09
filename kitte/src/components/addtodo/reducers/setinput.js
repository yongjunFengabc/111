const initialState=null;
export default function settodoname(state = initialState, action) {
    const {type,payload={}}=action;
    switch(type) {
        case 'name_LIST':
        return payload.name;
        case 'name_LIST_RESET':
        return "";
        default: 
            return state;
    }
}