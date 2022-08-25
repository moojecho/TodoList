// after.js

// Actions
const CLEAR = 'after/CLEAR';
const REMOVE = 'after/REMOVE';
const CANCLE = 'after/CANCLE'

const initialDone = {
    list:[{title:'Done/title',contents:'Done/contents',id:513}]
};


// Action Creators
export function clear_List(todoList){

    return { type: CLEAR, todoList: todoList };
}

export function remove_Done(before_List){

    return { type: REMOVE, before_List: before_List };
}

export function cancleDone(before_List){

    return { type: CANCLE, before_List: before_List };
}


// Reducer
export default function reducer(state = initialDone, action = {}) {
switch (action.type) {
    case "after/CLEAR":{
        const new_list = action.todoList;
        return {list: new_list};
    }
    case "after/REMOVE":{
        const new_list = action.before_List;
        return {list: new_list};
    }

    case "after/CANCLE":{
        const new_list = action.before_List;
        return {list: new_list};
    }
// do reducer stuff
default: return state;
}
}



