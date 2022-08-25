import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import shortid from "shortid";
import "./style.css";

import { createList } from "../../redux/modules/todo";


function Layout() {
  const inputData = useSelector((state) => state.todo.list);

  const TodoTitle = useRef(null);
  const TodoContents = useRef(null);
  
  const dispatch = useDispatch();

  
  const resetInput = () => {
    TodoTitle.current.value = '';
    TodoContents.current.value = '';
  };

  const LayoutAddList = () => {


    if (TodoTitle.current.value == '' || TodoContents.current.value == '') {
      window.alert("제목,내용을 채워주세요.");
    }
    else {

      dispatch(createList({
        title: TodoTitle.current.value,
        contents: TodoContents.current.value,
        //id:shortid.generate()
      }));

      resetInput();


    };

  };



  return (
    <div className="Input-Form">
      <div className="title-page">
        <p>제목</p>
        <input type="text" id="title-input" ref={TodoTitle}
        />
      </div>
      <div className="content-page">
        <p>내용</p>
        <input type="text" id="content-input" ref={TodoContents}
        />
      </div>
      <button className="input-button" onClick={LayoutAddList}>추가하기</button>
    </div>
  );

}



export default Layout;



