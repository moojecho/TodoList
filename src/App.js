import React from 'react';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import List from './components/list/List';
import Todo from './components/todo/Todo';


function App() {

  const [list, setList]= React.useState([]);
  const [Clearlist, setClearlist] = React.useState([]);


console.log(list)
  // list.jsx 관련 코드
  const removeList = (id) =>{
    setList(list.filter(list =>{
      return list.id !== id;
    }));
  };

  const clearList = (id) =>{

    const newClearList = Clearlist.concat(list.find(list =>{return list.id==id;}))

    setList(list.filter(list =>{
      return list.id !== id;
    }));
    setClearlist(newClearList);
    
  };


//-------------------------------------------------

  // todo.jsx 관련 코드
  const removeTodoList = (id) =>{
    setClearlist(Clearlist.filter(list =>{
      return list.id !== id;
    }));
  };



  const cancelList = (id) =>{

    const newCancelList = list.concat(Clearlist.find(list =>{return list.id==id;}))

    setClearlist(Clearlist.filter(Clearlist =>{
      return Clearlist.id !== id;
    }));
    setList(newCancelList);
    
  };


//-----------------------------------------------

// Layout.jsx 관련 코드
  const addList = (TodoList) => {
    setList([...list,{
      ...TodoList
    }]);
  };

  
  return (
    <div className="List-Form">
      <Header/>
      <Layout addList={addList}/>
      <List list={list} removeList={removeList} clearList={clearList}/>
      <Todo list={Clearlist} removeTodoList={removeTodoList}
       clearList={clearList} cancelList={cancelList}/>

    </div>
  );
}

export default App;
