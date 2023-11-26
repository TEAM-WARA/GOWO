import React, { useState } from 'react';
import './Login.css'; // CSS 파일 임포트
import { GoSurveyBtn } from "../button/Button"
import { Route, useNavigate } from 'react-router-dom'; // useNavigate로 변경
import Routine from "../mypage/routine"

const Login = () => {
  const [button] = useState(true);
  const [username, setUsername] = useState('');
  //회원번호 입력 
  const navigate = useNavigate(); // useNavigate 사용

  const handleLoginBtnClick = () => {
    console.log('입력한 비밀번호:',username); //콘솔에 입력한 값 출력 
    // 서버 URL
    const serverUrl = 'https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app'; // 실제 서버 URL로 변경

    // 서버에 POST 요청 보내기
    fetch(`${serverUrl}/routine/password?password=${username}`,
    {method:"POST"})
    .then(response => {
      // 응답이 JSON 형식인지 확인
      if (!response.ok) {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }
      return response.json();
    })
      .then(data => {
        // 서버에서의 응답 처리
        if (data) {
          // 비밀번호가 일치하면 다음 페이지로 전달해야함 
          alert('비밀번호가 일치!!.');
          navigate(`/Routine?password=${username}`);
          <Route path="/Routine" element={<Routine/>}/>
        } 
      })
      .catch(error => {
        console.error('Error:', error);
        alert('비밀번호가 일치하지 않습니다.');
      });
  };

  return (
    <div className="login-container">
      <h2>회원이신가요?</h2>
      <label className='login-label'>

        <input
          type="text"
          placeholder="Password"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <button className="routine-button" onClick={handleLoginBtnClick}>
          루틴
        </button>
      </label>
      <div className='button-con'>
        
      </div> 
      <div className='button-con'>
        {button && <GoSurveyBtn buttonStyle='btn--outline' className="routine-button" >새로운 루틴 만들기</GoSurveyBtn>}
      </div>


    </div>
  );
};

export default Login;
