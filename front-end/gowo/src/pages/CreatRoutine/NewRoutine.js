import React, { useState } from "react";
import "./NewRoutine.css";
import NewRoutineComponent from "./NewRoutineComponent";
import { useLocation } from 'react-router-dom';

function NewRoutine() {
  const location = useLocation();
  const routineData = location.state?.routineData || {};

  const data = [
    { 이름: "홍길동", 나이: 30, 직업: "개발자" },
    { 이름: "이순신", 나이: 35, 직업: "디자이너" },
    { 이름: "장보고", 나이: 40, 직업: "마케터" },
  ];

  const columns = data.map((item, index) => (
    <table key={index}>
      <tbody>
        {Object.entries(item).map(([key, value], i) => (
          <tr key={i}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  //버튼
  const [button] = useState(true);

  //회원번호 입력
  const [state, setState] = useState({
    author: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <>
      <NewRoutineComponent information={routineData}></NewRoutineComponent>
    </>
  );
}

export default NewRoutine;
