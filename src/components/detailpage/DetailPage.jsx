import React from 'react';
import "./style.css";
import { useNavigate,useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function DetailPage() {

  const my_list = useSelector((state) => state.detail.list)
  const id = useParams();
  console.log(id)
  
  const Navigate = useNavigate();



  return (
    <div className="detailpage-box-form">
      <div className="detailbox-head">
        <p style={{ marginLeft: "20px" ,width:"20px" }}>ID:{my_list[0].id}</p>
        <button className="detailpage-button" onClick={() => { Navigate('/'); }}>이전으로</button>
      </div>
      <div className="detailbox-cotents">
        <h1>{my_list[0].title}</h1>
        <p>{my_list[0].contents}</p>
      </div>
    </div>
  );
}

export default DetailPage;