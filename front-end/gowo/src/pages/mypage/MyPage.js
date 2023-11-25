import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; //router 사용
import { Button } from '../button/Button';
import { AnotherButton } from '../button/Button';
import './MyPage.css';

function MyPage() {

    const navigate = useNavigate();
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


    // 확인 시 나오는 페이지
    const handleSubmit = () => {
        console.log(state);
        navigate("/NewRoutine");
        console.log("hi");
    }


    // 확인 시 나오는 페이지
        const handleLogin = () => {
            console.log(state);
            navigate("/MyRoutine");
            console.log("hi");
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
            <nav className="check-user-text">
                <ul>
                    <li className="mypagetext">회원이신가요? </li>
                    <li className="input-userid">
                        <input
                            name="author"
                            value={state.author}
                            onChange={handleChangeState}
                        />
                    </li>
                    <li className='usercheck-button'>{button && <AnotherButton buttonStyle='btn--outline' onClick={handleLogin}>로그인</AnotherButton>}</li>
                </ul>
            </nav>
            <div className="sur-section">
                <div className="survey">
                    <ul className="survey-question">
                        <li className="survey-text">성별을 선택해주세요</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="여자"
                                    checked={genderOption === "여자"}
                                    onChange={handleGenderChange}
                                />
                                <span className="FormCheckText">여자</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="남자"
                                    checked={genderOption === "남자"}
                                    onChange={handleGenderChange}
                                />
                                <span className="FormCheckText">남자</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">나이를 선택해주세요</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="10대"
                                    checked={ageOption === "10대"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">10대</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="20대"
                                    checked={ageOption === "20대"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">20대</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">주로 하고싶은 운동은 무엇입니까?</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="준비운동"
                                    checked={exerciseOption === "준비운동"}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">준비운동</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="마무리운동"
                                    checked={exerciseOption === "마무리운동"}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">마무리운동</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">어떤 장소를 선호합니까?</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="실외"
                                    checked={locationOption === "실외"}
                                    onChange={handleLocationChange}
                                />
                                <span className="FormCheckText">실외</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="실내"
                                    checked={locationOption === "실내"}
                                    onChange={handleLocationChange}
                                />
                                <span className="FormCheckText">실내</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">운동기구를 사용합니까?</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="예"
                                    checked={equipmentOption === "예"}
                                    onChange={handleEquipmentChange}
                                />
                                <span className="FormCheckText">예</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="아니요"
                                    checked={equipmentOption === "아니요"}
                                    onChange={handleEquipmentChange}
                                />
                                <span className="FormCheckText">아니요</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="check-user-text">
                <ul>
                    <li className="mypagetext">원하는 회원번호를 적어주세요 </li>
                    <li className="input-userid">
                        <input
                            name="author"
                            value={state.author}
                            onChange={handleChangeState}
                        />
                    </li>
                    <li className='usercheck-button'>{button && <AnotherButton buttonStyle='btn--outline' onClick={handleSubmit}>아이디 확인</AnotherButton>}</li>
                    <li className='usercheck-button'>{button && <AnotherButton buttonStyle='btn--outline' onClick={handleSubmit}>로그인</AnotherButton>}</li>
                </ul>
            </nav>
        </>
    )
}

export default MyPage;