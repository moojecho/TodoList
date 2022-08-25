// after.js

// Actions
const DETAILLIST = 'detail/DETAILLIST';
const DETAILTODO = 'detail/DETAILTODO';

const initialDetail = {
    list:[]
};


// Action Creators
export function detail_List(list){

    return { type: DETAILLIST, list: list };
}

export function detail_Todo(todoList){

    return { type: DETAILTODO, todoList: todoList };
}

// Reducer
export default function reducer(state = initialDetail, action = {}) {
switch (action.type) {
    case "detail/DETAILLIST":{
        const new_list = action.list;
        return {list: new_list};
    }
    case "detail/DETAILTODO":{
        const new_list = action.todoList;
        return {list: new_list};
    }

// do reducer stuff
default: return state;
}
}


