import React, { useState } from "react";
import { AnotherButton, Button } from '../button/Button';
import './MyRoutine.css';
import TableComponent from './TableComponent';

export default function MyRoutine() {
    const data = [
        { '이름': '홍길동', '나이': 30, '직업': '개발자' },
        { '이름': '이순신', '나이': 35, '직업': '디자이너' },
        { '이름': '장보고', '나이': 40, '직업': '마케터' },
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
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        console.log(state);
    }

    //라디오 박스
    const [genderOption, setGenderOption] = useState("");
    const handleGenderChange = (e) => {
        setGenderOption(e.target.value);
    };

    const [ageOption, setAgeOption] = useState("");
    const handleAgeChange = (e) => {
        setAgeOption(e.target.value);
    };

    const [exerciseOption, setExerciseOption] = useState("");
    const handleExerciseChange = (e) => {
        setExerciseOption(e.target.value);
    };

    const [locationOption, setLocationOption] = useState("");
    const handleLocationChange = (e) => {
        setLocationOption(e.target.value);
    };

    const [equipmentOption, setEquipmentOption] = useState("");
    const handleEquipmentChange = (e) => {
        setEquipmentOption(e.target.value);
    };

    return (
        <>
            {/* <nav className="check-user-text"> */}
            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
            {columns}
        </div> */}

            <TableComponent></TableComponent>
            {/* </nav> */}
        </>
    )
}