import React from 'react';
import "./style.css";

function List({list,removeList,clearList}) {
   
   
  
 const my_list = list;

const list_all = my_list.map(list => {
  return (
       
        <div className="list-box" key={list.id}>
          <h2>{list.title}</h2>
          <p>
          {list.contents}
            </p>
          <button className="list-button-left" onClick={()=>clearList(list.id)}>완료하기</button>
          <button className="list-button-right" onClick={()=>removeList(list.id)}>삭제하기</button>
        </div>
      
      );
    })


  return (
    <div className="list-box-form">
      <p className="head-text">Working..🔥</p>
      <div className="list-wrapper">
        {list_all}
      </div>
    </div>
  );
}

export default List;

//여까지 했을때 워킹 리스트는 사라졌지만 웹페이지 실행은 됐고 오류도 없었음
/*
function List(props) {
  const list=[];
  const [dolist, setDolist]= React.useState("리액트","222","333");
  const dolist_count = Array.from({length:dolist},(v,i) => i)

  return (
    <>
    {dolist_count.map((n, i) => {
  return (
<div className="List-Form">
       <p className="head-text">Working..🔥</p>
        <div className="list-box">
          <h2>리액트 공부하기</h2>
          <p>
          {dolist}
            </p>
          <button className="list-button-left">완료하기</button>
          <button className="list-button-right">삭제하기</button>
        </div>
      
    </div>  );
    })}
  </>);
}

*/
