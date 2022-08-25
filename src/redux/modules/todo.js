// todo.js

// Actions
const CREATE = 'todo/CREATE';
const REMOVE = 'todo/REMOVE';
const ADD = 'todo/ADD';

const initialState = {
    list:[{title:'Working/title',contents:'Working/contents',id:465}]
};

let newId = 0;

// Action Creators
export function createList(newList){

    return { type: CREATE, newList: newList };
}

export function remove_List(before_List){

    return { type: REMOVE, before_List: before_List };
}

export function add_List(newList){

    return { type: ADD, newList: newList };
}



// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "todo/CREATE":{
        const beforeNewList = {...action.newList,id:newId++};
        const new_list = [...state.list,beforeNewList];
        console.log(new_list)
        return {list: new_list};
    }
    case "todo/REMOVE":{
        const new_list = action.before_List;

        console.log(new_list)

        return {list: new_list};
    }

    case "todo/ADD":{
        const new_list = action.newList;
        return {list: new_list};
    }
// do reducer stuff
default: return state;
}
}



