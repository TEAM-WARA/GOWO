import React, { useEffect, useState } from "react";
import { AnotherButton, Button } from '../button/Button';
import './NewRoutine.css';
import Cards from "../card/Cards";
import CardItem from "../card/Carditem";
import Modal from 'react-modal';

export default function NewRoutineComponent() {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
  const numCols = 3;  // 열의 수를 결정하는 변수

  const [colIndex, setColIndex] = useState(0); //몇번째 열인지
  const [rowIndex, setRowIndex] = useState(0); //몇번째 줄인지

  var health = "근력";
  var tool = "사용";
  var place  = "헬스장";

  const [columns, setColumns] = useState(
    Array.from({length: numCols}).map(() => Array(3).fill().map(() => []))
  );

  const [data1, setData] = useState(); //API에서 가져온 데이터

useEffect(() => {
  console.log(data1);
}, [data1]);

  const data = [
    //... 데이터 배열
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false); //팝업창 키고끄기
  
  // 버튼을 렌더링하는 함수
const renderButton = (colIndex, rowIndex) => {
  // // 메인 운동 부분(rowIndex가 1인 경우)에서는 배열의 크기가 4 이상일 경우 버튼을 렌더링하지 않음
  if (rowIndex === 1 && columns[colIndex][rowIndex].length >= 4) {
    return null;
  }
  // 나머지 부분에서는 배열의 크기가 2 이상일 경우 버튼을 렌더링하지 않음
  else if (rowIndex !== 1 && columns[colIndex][rowIndex].length >= 2) {
    return null;
  }


  return (
    <AnotherButton onClick={() => handleButtonClick(colIndex, rowIndex)}>
      Add Exercise
    </AnotherButton>
  );
};


      // 버튼 클릭 시 실행되는 함수
  const handleButtonClick = (colIndex, rowIndex) => {
    // 새로운 운동을 추가하는 로직을 여기에 작성하세요.
    // Create payload
    if (rowIndex === 1 ){ // rowindex가 1일때(메인운동일때)
        // API에서 데이터 가져오기
        fetch('https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/main?health=근력&tool=사용&place=헬스장')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // 데이터를 JSON 형태로 반환
            })
            .then(apiData => {
                console.log('Fetched data:', apiData);
                setData(apiData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
          }
          else if (rowIndex !== 1){ // rowindex가 1이 아닐때(메인운동이 아닐때)
        // API에서 데이터 가져오기
        fetch('https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/sub/준비 운동')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // 데이터를 JSON 형태로 반환
            })
            .then(apiData => {
                console.log('Fetched data:', apiData);
                setData(apiData.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


          }

    setColIndex(colIndex);
    setRowIndex(rowIndex);
    setModalIsOpen(true);

  };


        // 모달의 확인 버튼 클릭 시 실행되는 함수
        const ModalButtonClick = (colIndex, rowIndex) => {
          // 새로운 운동을 추가하는 로직을 여기에 작성하세요.
      
            // columns 배열의 복사본을 생성
            const newColumns = [...columns];
            // 복사본 배열의 특정 위치에 값을 추가
            newColumns[colIndex][rowIndex] = [...newColumns[colIndex][rowIndex], "새로운 운동"];
            // setColumns 함수를 호출하여 columns의 값을 변경
            setColumns(newColumns);
            setModalIsOpen(false)
        };
  
return (
  <>
  <table id="jb-table">
  <thead>
    <tr>
        <th>운동종류</th>
        {Array.from({length: numCols}).map((_, i) => (
            <th key={i}>{i + 1+"일"}</th>
          ))}
    </tr>
  </thead>
  <tbody>
    {["준비운동", "메인 운동", "마무리 운동"].map((value, i) => (
      <tr key={i}>
        <td>{value}</td>
        {Array.from({length: numCols}).map((_, j) => (
              <td key={j}>
                {columns[j][i].map((innerValue, innerIndex) => (
                  <CardItem 
                    key={i + "-" + innerIndex}
                    src={i}
                    text={innerValue}
                    label={i + "-" + innerIndex}
                    video={i}
                  />
                ))}
                {renderButton(j, i)} 
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
<Modal className='Modal' isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        추가할 운동을 선택해주세요
<div style={{display:"flex"}}>
        {data1 && data1.map((item, i) => (
  <CardItem
    key={i}
    src={item.imageUrl}
    text={item.workOutName}
    label={item.health}
    video={item.videoUrl}
  />
))}
</div>
        <div style={{display:"flex"}}>
        <button className="changeOption" onClick={()=>setModalIsOpen(false)}>취소</button> 
        <button className="changeOption" style={{backgroundColor:"blue", color:"white"}} onClick={() => ModalButtonClick(colIndex,rowIndex)}>선택</button>
        </div>
      </Modal>

</>
);

}