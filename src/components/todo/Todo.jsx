import React from 'react';
import "./style.css";

function Todo({list,removeTodoList,cancelList}) {
 
  const my_list = list;

  
  const list_all = my_list.map(list => {
    return (
          <div className="list-box" key={list.id}>
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