import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AnotherButton } from "../button/Button";
import CardItem from "../card/Carditem";
import "./NewRoutine.css";
import { useNavigate } from "react-router-dom";

export default function NewRoutineComponent({information} ) {
  const navigate = useNavigate(); //루틴 페이지로 넘기기 위한 데이터

  if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

  const numCols = information.count;

  // useEffect(() => {
  //   console.log("information.count:", information);
  //   if (information && information.count) {
  //     setNumCols(information.count);
  //   }
  // }, [information]);
  // numCols를 의존성 배열에서 제거

  const [colIndex, setColIndex] = useState(0); //몇번째 열인지
  const [rowIndex, setRowIndex] = useState(0); //몇번째 줄인지

  var health = information.exerciseOptions[0];
  var tool = information.equipment === '예' ? '사용' : '미사용';
  var place = information.location;

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

  const [asd, setAsd] = useState(
    Array(numCols)
      .fill()
      .map(() => ({
        preWorkOut: [],
        mainWorkOut: [],
        finishWorkOut: [],
      }))
  );

  const handleSubmit = () => {
    // 서버 URL
    const serverUrl = 'https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app'; // 실제 서버 URL로 변경

    // 서버에 POST 요청 보내기
    fetch(`${serverUrl}/routine/password?password=${state.author}`,
    {method:"POST"})
    .then(response => {
      return response.json();
    })
      .then(data => {
        // 서버에서의 응답 처리
        if (!data) {
          fetch(
            `https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/routine?password=${state.author}`,
            {
              method: "POST",
              // headers: {
              //   Authorization: `${token}`,
              // },
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(asd), // JSON 형태로 변환하여 전송
            }
          )
            .then((data) => {
              alert("저장되었습니다!");
              console.log("보낸값",asd);
              navigate("/Login");
            })
            .catch((error) => {
              alert("실패");
              console.error(error);
            });
        } 
        else{
          alert('중복된 비밀번호입니다.');
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
        alert('비밀번호가 일치하지 않습니다.');
      });
   
    //console.log(state);
  };

  const [columns, setColumns] = useState(
    Array.from({ length: numCols }).map(() =>
      Array(3)
        .fill()
        .map(() => [])
    )
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
    if (rowIndex === 1) {
      // rowindex가 1일때(메인운동일때)
      // API에서 데이터 가져오기
      fetch(
        "https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/main?health=근력&tool=사용&place=헬스장"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // 데이터를 JSON 형태로 반환
        })
        .then((apiData) => {
          console.log("Fetched data:", apiData);
          setData(apiData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (rowIndex !== 1) {
      // rowindex가 1이 아닐때(메인운동이 아닐때)
      // API에서 데이터 가져오기
      fetch(
        "https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/sub/준비 운동"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // 데이터를 JSON 형태로 반환
        })
        .then((apiData) => {
          console.log("Fetched data:", apiData);
          setData(apiData.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
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
    newColumns[colIndex][rowIndex] = [
      ...newColumns[colIndex][rowIndex],
      ...selectedItems,
      // "새로운 운동",
    ];
    // setColumns 함수를 호출하여 columns의 값을 변경
    setColumns(newColumns);

    // 선택된 item의 id 값만 추출
    const selectedIds = selectedItems.map((item) => item.id);
    console.log("selectedIds:", selectedIds);

    // 선택한 항목들을 적절한 배열에 추가
    switch (rowIndex) {
      case 0: // 준비운동
        setAsd((prevAsd) =>
          prevAsd.map((item, i) =>
            i === colIndex
              ? { ...item, preWorkOut: [...item.preWorkOut, ...selectedIds] }
              : item
          )
        );
        break;
      case 1: // 메인운동
        setAsd((prevAsd) =>
          prevAsd.map((item, i) =>
            i === colIndex
              ? { ...item, mainWorkOut: [...item.mainWorkOut, ...selectedIds] }
              : item
          )
        );
        break;
      case 2: // 마무리운동
        setAsd((prevAsd) =>
          prevAsd.map((item, i) =>
            i === colIndex
              ? {
                  ...item,
                  finishWorkOut: [...item.finishWorkOut, ...selectedIds],
                }
              : item
          )
        );
        break;
      default:
        break;
    }

    setModalIsOpen(false);

    // 선택한 항목들 초기화
    setSelectedItems([]);
  };

  // 모달에서 선택한 항목을 저장하는 배열
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (e, item) => {
    if (e.target.checked) {
      // 선택된 항목 추가
      setSelectedItems([...selectedItems, item]);
    } else {
      // 선택 해제된 항목 제거
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  return (
    <>
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
          {["준비운동", "메인 운동", "마무리 운동"].map((value, i) => (
            <tr key={i}>
              <td>{value}</td>
              {Array.from({ length: numCols }).map((_, j) => (
                <td key={j}>
                  {columns[j][i].map((innerValue, innerIndex) => (
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
      <Modal
        className="Modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        추가할 운동을 선택해주세요
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {data1 &&
            data1.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "250px",
                  width: "230px",
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={(e) => handleCheckboxChange(e, item)}
                />
                <div style={{width: "100%",height: "100%"}}>
                <CardItem 
                  src={item.imageUrl}
                  text={item.workOutName}
                  label={item.health}
                  video={item.videoUrl}
                />
                </div>
              </div>
            ))}
        </div>
        <div style={{ display: "flex" }}>
          <button
            className="changeOption"
            onClick={() => setModalIsOpen(false)}
          >
            취소
          </button>
          <button
            className="changeOption"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => ModalButtonClick(colIndex, rowIndex)}
          >
            선택
          </button>
        </div>
      </Modal>

      <nav className="check-user-text">
        <ul>
          <li className="mypagetext">루틴저장번호 </li>
          <li className="input-userid">
            <input
              name="author"
              value={state.author}
              onChange={handleChangeState}
            />
          </li>
          <li className="usercheck-button">
            {button && (
              <AnotherButton buttonStyle="btn--outline" onClick={handleSubmit}>
                저장
              </AnotherButton>
            )}
          </li>
        </ul>
      </nav>
      <button onClick={()=>{console.log(information.count);}}>dd</button>
    </>
  );
}
