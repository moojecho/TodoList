import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import {useSelector} from "react-redux";

function Todo({removeTodoList,cancelList,moveTodoPage}) {
 
  const my_Done = useSelector((state) => state.after.list); 
 
  
  const list_all = my_Done.map(list => {
    return (
          <div className="list-box" key={list.id}>
            <div className="link-box">
            <Link to={`/id:${list.id}`}  style={{textDecorationLine:"none"}} onClick={()=>moveTodoPage(list.id)}>상세보기</Link>
          </div>
            <h2>{list.title}</h2>
            <p>
            {list.contents}
              </p>
            <button className="todo-list-button-left" onClick={()=>cancelList(list.id)}>취소하기</button>
            <button className="list-button-right" onClick={()=>removeTodoList(list.id)}>삭제하기</button>
          </div>
        );
      })


  return (
    <div className="List-Form">
       <p className="head-text">Done..🍼</p>
       <div className="list-wrapper">
       {list_all}
       </div>
    </div>
  );
}

export default Todo;