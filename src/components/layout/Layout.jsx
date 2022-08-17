import React from 'react';
import "./style.css";


function Layout({addList}) { 
    
const [todoTitle, setTodoTitle] = React.useState();
const [todoContents, setTodoContents] = React.useState();



const [count, setCount] = React.useState(0);

const idCount = () => {
setCount(count+1);
};

const resetInput = () => {
  setTodoTitle('');
  setTodoContents('');
};

const layoutAddList = () =>{
  
  idCount();

  addList({
    title:todoTitle, 
    contents:todoContents,
    id:count,
  });

  if(todoTitle==''|| todoContents==''){
    window.alert("제목,내용이 채워주세요.");
  }
  resetInput();
};
 
    return (
        <div className="Input-Form">
          <div className="title-page">
            <p>제목</p>
            <input type="text" id="title-input" 
            value={todoTitle||''} onChange={e => setTodoTitle(e.target.value)}/>
          </div>
          <div className="content-page">
            <p>내용</p>
            <input type="text" id="content-input" 
            value={todoContents||''} onChange={e => setTodoContents(e.target.value)}/>
          </div>
          <button className="input-button" onClick={layoutAddList} value={count}>추가하기</button>
        </div>
      );

}



export default Layout;