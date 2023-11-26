import React, { useEffect, useState } from "react";
import CardItem from "../card/Carditem";
import "./MyRoutine.css";

export default function TableComponent({password}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/routine?password=${password}`
    )
      .then((response) => response.json())
      .then((apiData) => setData(apiData.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderButton = (j, i) => {
    // Add your button rendering logic here
  };

  const numCols = data.length;

  return (
    <table id="jb-table">
      <thead>
        <tr>
          <th>운동종류</th>
          {Array.from({ length: numCols }).map((_, i) => (
            <th key={i}>{i + 1 + "일"}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {["preWorkOut", "mainWorkOut", "finishWorkOut"].map((value, i) => (
          <tr key={i}>
            <td>{value}</td>
            {Array.from({ length: numCols }).map((_, j) => (
              <td key={j}>
                {data[j][value].map((innerValue, innerIndex) => (
                  <CardItem
                    key={i + "-" + innerIndex}
                    src={innerValue.imageUrl}
                    text={innerValue.workOutName}
                    label={innerValue.health}
                    video={innerValue.videoUrl}
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
