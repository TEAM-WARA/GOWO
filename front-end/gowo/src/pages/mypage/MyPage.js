import React, { useState } from "react";
import './MyPage.css';
import { useNavigate } from "react-router-dom";

function MyPage() {
    const navigate = useNavigate(); //루틴 페이지로 넘기기 위한 데이터

    const handleRoutineCreate = () => {
        if (!genderOption || !ageOption || !locationOption || !equipmentOption || !exerciseOptions.length || !countOption) {
            alert("설문조사를 모두 완료해주세요");
            return;
        }
        // 루틴 만들기 버튼을 클릭했을 때 실행되는 함수
        // 선택된 라디오 박스와 체크 박스의 값을 Routine 페이지로 전달
        const routineData = {
            gender: genderOption,
            age: ageOption,
            location: locationOption,
            equipment: equipmentOption,
            exerciseOptions: exerciseOptions,
            count: Number(countOption)
        };

        // 다른 페이지로 이동하면서 상태를 전달
        navigate("/NewRoutine", { state: { routineData } });
    };

    //라디오 박스
    const [genderOption, setGenderOption] = useState("");
    const handleGenderChange = (e) => {
        setGenderOption(e.target.value);
    };

    const [ageOption, setAgeOption] = useState("");
    const handleAgeChange = (e) => {
        setAgeOption(e.target.value);
    };

    const [locationOption, setLocationOption] = useState("");
    const handleLocationChange = (e) => {
        setLocationOption(e.target.value);
    };

    const [equipmentOption, setEquipmentOption] = useState("");
    const handleEquipmentChange = (e) => {
        setEquipmentOption(e.target.value);
    };

    const [countOption, setCountOption] = useState();
    const handleCountChange = (e) => {
        setCountOption(e.target.value);
    };

    const [exerciseOptions, setExerciseOptions] = useState([]);

const handleExerciseChange = (e) => {
    const value = e.target.value;
    if (exerciseOptions.includes(value)) {
        // 이미 선택된 경우, 제거
        setExerciseOptions(exerciseOptions.filter(option => option !== value));
    } else {
        // 선택되지 않은 경우, 추가
        setExerciseOptions([...exerciseOptions, value]);
    }
};

    return (
        <>
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
                                    value="10-20대"
                                    checked={ageOption === "10-20대"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">10-20대</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="30-40대"
                                    checked={ageOption === "30-40대"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">30-40대</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="50-60대"
                                    checked={ageOption === "50-60대"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">50-60대</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="70대 이상"
                                    checked={ageOption === "70대 이상"}
                                    onChange={handleAgeChange}
                                />
                                <span className="FormCheckText">70대 이상</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">주로 운동할 장소를 선택해주세요</li>
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

                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value="헬스장"
                                    checked={locationOption === "헬스장"}
                                    onChange={handleLocationChange}
                                />
                                <span className="FormCheckText">헬스장</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">운동 기구 및 소도구를 사용합니까?</li>
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
                    <ul className="survey-question">
                        <li className="survey-text">운동 목적을 선택해주세요. (다중 선택 가능)</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="근력"
                                    checked={exerciseOptions.includes("근력")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">근력</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="민첩성"
                                    checked={exerciseOptions.includes("민첩성")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">민첩성</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="순발력"
                                    checked={exerciseOptions.includes("순발력")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">순발력</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="심폐지구력"
                                    checked={exerciseOptions.includes("심폐지구력")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">심폐지구력</span>
                            </label>
                        </li>
                    </ul>
                    <ul>
                    <li className="survey-text"></li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="유연성"
                                    checked={exerciseOptions.includes("유연성")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">유연성</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="평형성"
                                    checked={exerciseOptions.includes("평형성")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">평형성</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="협응력"
                                    checked={exerciseOptions.includes("협응력")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">협응력</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="checkbox"
                                    value="유산소"
                                    checked={exerciseOptions.includes("유산소")}
                                    onChange={handleExerciseChange}
                                />
                                <span className="FormCheckText">유산소</span>
                            </label>
                        </li>
                    </ul>
                    <ul className="survey-question">
                        <li className="survey-text">일주일에 몇회 운동을 선호하시나요?</li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={1}
                                    checked={Number(countOption) === 1}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">1회</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={2}
                                    checked={Number(countOption) === 2}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">2회</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={3}
                                    checked={Number(countOption) === 3}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">3회</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={4}
                                    checked={Number(countOption) ===4 }
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">4회</span>
                            </label>
                        </li>
                    </ul>
                    <ul>
                    <li className="survey-text"></li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={5}
                                    checked={Number(countOption) === 5}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">5회</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={6}
                                    checked={Number(countOption) === 6}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">6회</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="FormCheckLeft"
                                    type="radio"
                                    value={7}
                                    checked={Number(countOption) === 7}
                                    onChange={handleCountChange}
                                />
                                <span className="FormCheckText">7회</span>
                            </label>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <nav className="create-user-text-bottom">
                <ul>
                    <li className='usercheck-button'>
                        <button className="make-routineBtn" onClick={handleRoutineCreate}>루틴 만들기</button>
                        </li>
                </ul>
            </nav>
        </>
    )
}

export default MyPage;