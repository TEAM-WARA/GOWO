import React, { useState } from "react";
import { AnotherButton, Button } from '../button/Button';
import './NewRoutine.css';
import Cards from "../card/Cards";
import CardItem from "../card/Carditem";

export default function NewRoutineComponent() {
  const numCols = 3;  // 열의 수를 결정하는 변수

  const [columns, setColumns] = useState(
    Array.from({length: numCols}).map(() => Array(3).fill().map(() => []))
  );

  
  // 버튼을 렌더링하는 함수
const renderButton = (colIndex, rowIndex) => {

  // 메인 운동 부분(rowIndex가 1인 경우)에서는 배열의 크기가 4 이상일 경우 버튼을 렌더링하지 않음
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

      // columns 배열의 복사본을 생성
  const newColumns = [...columns];
// 복사본 배열의 특정 위치에 값을 추가
newColumns[colIndex][rowIndex] = [...newColumns[colIndex][rowIndex], "새로운 운동"];
  // setColumns 함수를 호출하여 columns의 값을 변경
  setColumns(newColumns);
  };
  
return (
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
                    label={i}
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
);

}