import React, { useState } from "react";
import { AnotherButton, Button } from '../button/Button';
import './MyRoutine.css';
import Cards from "../card/Cards";
import CardItem from "../card/Carditem";

export default function TableComponent() {
  const numCols = 3;  // 열의 수를 결정하는 변수

  const [columns, setColumns] = useState(
  [
  [["1", "2"], ["3", "4", "5","6"], ["7","8"]],  // 1 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 2 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 3 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 4 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 5 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 6 열
  [["A", "B"], ["C", "D", "E","F"], ["F","G"]],  // 7 열
  ]);
  
return (
  <table id="jb-table">
  <thead>
    <tr>
      <th>운동종류</th>
      {columns.map((col, i) => (
        <th key={i}>{i + 1+"일"}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {["준비운동", "메인 운동", "마무리 운동"].map((value, i) => (
      <tr key={i}>
        <td>{value}</td>
        {columns.map((col, j) => (
          <td key={j} >  
            {Array.isArray(col[i]) ? 
              col[i].map((innerValue, innerIndex) => (
                <CardItem
                  key={i + "-" + innerIndex}
                  src={i}
                  text={innerValue}
                  label={i}
                  video={i}
                />
              )) 
              : 
              col[i]
            }
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
);

}