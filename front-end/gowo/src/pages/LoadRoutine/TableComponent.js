import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardItem from "../card/Carditem";
import "./MyRoutine.css";

export default function TableComponent() {
  const location = useLocation();
  // const author = location.state.author;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/routine?password=테스트`
    )
      .then((response) => response.json())
      .then((apiData) => setData(apiData.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <table id="jb-table">
      <thead>
        <tr>
          <th>운동종류</th>
          {data.map((item, i) => (
            <th key={i}>{i + 1 + "일"}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {["준비운동", "메인 운동", "마무리 운동"].map((value, i) => (
          <tr key={i}>
            <td>{value}</td>
            {data.map((item, j) => (
              <td key={j}>
                {item[value].map((innerValue, innerIndex) => (
                  <CardItem
                    key={i + "-" + innerIndex} // i 는 준비운동, 메인운동, 마무리운동, innerIndex는 각 운동들
                    src={innerValue.imageUrl}
                    text={innerValue.workOutName}
                    label={innerValue.workOutDescription}
                    video={innerValue.videoUrl}
                  />
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
