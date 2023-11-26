import React, { useState, useEffect } from "react";
import { AnotherButton, Button } from '../button/Button';
import { useLocation } from 'react-router-dom';
import './MyRoutine.css';
import TableComponent from './TableComponent';

export default function MyRoutine() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const password = queryParams.get('password');
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

    // useEffect(() => {
    //     // API에서 데이터 가져오기
    //     fetch('https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/routine?passoword={비밀번호}')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then(apiData => {
    //             console.log('Fetched data:', apiData);
    //             setData(apiData.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);


    return (
        <>
            {/* <nav className="check-user-text"> */}
            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
            {columns}
        </div> */}

            <TableComponent password = {password}></TableComponent>
            {/* </nav> */}
        </>
    )
}