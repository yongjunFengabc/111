export const changelist=(params={})=>{
    return {
        type: 'CHANGE_LIST',
        payload:params
    }
}

export const setlist=(params={})=>{
    return {
        type: 'name_LIST',
        payload:params
    }
}

export const resetlist=(params={})=>{
    return {
        type: 'name_LIST_RESTE',
        payload:params
    }
}

