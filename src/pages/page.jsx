import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import List from '../components/list/List';
import Todo from '../components/todo/Todo';
import DetailPage from '../components/detailpage/DetailPage';

//import page from "./pages/page"
import { useDispatch,useSelector } from "react-redux";


import { createList } from "../redux/modules/todo";
import { remove_List } from "../redux/modules/todo";
import { add_List } from "../redux/modules/todo";

import { remove_Done } from "../redux/modules/after";
import { clear_List } from "../redux/modules/after";
import { cancleDone } from "../redux/modules/after";

import { detail_List } from "../redux/modules/detail";
import { detail_Todo } from "../redux/modules/detail";


function Pages() {

  const my_list = useSelector((state) => state.todo.list);
  const my_Done = useSelector((state) => state.after.list);

  const dispatch = useDispatch();



  // list.jsx 관련 코드
  const removeList = (id) => {
    const before = my_list.filter(list => { return list.id !== id; })
    dispatch(remove_List(before));
  };

  const clearList = (id) => {
    const removeList = my_list.filter(List => { return List.id !== id;});
    dispatch(remove_List(removeList));

    const newClearList = my_Done.concat(my_list.find(list => { return list.id == id; }));
    dispatch(clear_List(newClearList));
    console.log(my_list.find(list => { return list.isdone == false; }))
  };

  
  //-------------------------------------------------



  // todo.jsx 관련 코드
  const removeTodoList = (id) => {
    const after = my_Done.filter(list => { return list.id !== id; })
    dispatch(remove_Done(after));
  };

  const cancelList = (id) => {
    const newCancelList = my_list.concat(my_Done.find(list => { return list.id == id; }))
    dispatch(add_List(newCancelList));

    const cancleDoneList = my_Done.filter(Clearlist => { return Clearlist.id !== id; });
    dispatch(cancleDone(cancleDoneList));
  };
  //-----------------------------------------------



  // Layout.jsx 관련 코드 
  const AddList = (TodoList) => {
    dispatch(createList(TodoList));
  };
  //------------------------------------------------



  //Detailpage.jsx 관련 코드 
  const moveListPage = (id) => {
    const newDetailList = my_list.filter(list => { return list.id == id; });
    dispatch(detail_List(newDetailList));
  }

  
  const moveTodoPage = (id) => {
    const newDetailList = my_Done.filter(list => { return list.id == id; });
    dispatch(detail_Todo(newDetailList));
  }




  return (
    <div className="List-Form">
         <Header/>
        <Layout AddList={AddList} />
        <List removeList={removeList} clearList={clearList}
          moveListPage={moveListPage} />
        <Todo removeTodoList={removeTodoList}
          cancelList={cancelList} moveTodoPage={moveTodoPage} />
      



    </div>
  );
}

export default Pages;






