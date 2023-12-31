import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline','btn--MainPage1','btn--MainPage2'];

const SIZES = ['btn--medium', 'btn--large'];

export const GoLoginBtn = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다. 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다. 
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        // children안에 어떤 내용을 입력해도 버튼 이름이 된다. 
        <Link to = '/Login' className = 'btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children} 
            </button>
        </Link>
    );
};
export const ViewBtn = ({children, type, onClick, buttonStyle, buttonSize}) => {
  // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다. 
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다. 
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      // children안에 어떤 내용을 입력해도 버튼 이름이 된다. 
      <Link to = '/CardPlace' className = 'btn-mobile'>
          <button 
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          >
              {children} 
          </button>
      </Link>
  );
};

  export const GoSurveyBtn = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다. 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다. 
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        // children안에 어떤 내용을 입력해도 버튼 이름이 된다. 
        <Link to = '/Mypage' className = 'btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children} 
            </button>
         </Link>
    );
};

export const RoutineBtn = ({children, type, onClick, buttonStyle, buttonSize}) => {
  // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다. 
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다. 
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      // children안에 어떤 내용을 입력해도 버튼 이름이 된다. 
      <Link to = '/Routine' className = 'btn-mobile'>
          <button 
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          >
              {children} 
          </button>
      </Link>
  );
}

export const LoginBtn = ({children, type, onClick, buttonStyle, buttonSize}) => {
  // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정된다. 
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정된다. 
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      // children안에 어떤 내용을 입력해도 버튼 이름이 된다. 
      //<Link to = '/Rountine' className = 'btn-mobile'>
          <button 
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          >
              {children} 
          </button>
      //</Link>
  );
}
// 새로운 버튼 회원가입 버튼 
export const AnotherButton = ({ children, type, onClick, buttonStyle, buttonSize, to }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
    );
  };
