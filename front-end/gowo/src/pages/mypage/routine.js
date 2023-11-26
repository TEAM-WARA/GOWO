import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Routine = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const password = queryParams.get('password');
  const routineData = location.state?.routineData || {};
  useEffect(() => {
    // password 값 사용 예시
    console.log('Received password:', password);
    console.log("Routine 페이지에서 전달된 상태:", location.state?.routineData);
    // 여기서 password 값으로 할 수 있는 작업을 수행
  }, [password,location.state]);

  return (
    <div>
      {/* Mypage 컴포넌트의 내용 */}
      <h2>Routine</h2>
      {/* 여기에 password 값을 사용하는 UI 등을 추가할 수 있습니다. */}
    </div>
  );
};

export default Routine;
