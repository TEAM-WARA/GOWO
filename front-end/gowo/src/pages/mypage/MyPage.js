import React,{useState} from "react";
import { Button} from '../button/Button';
import './MyPage.css';

function MyPage() {
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
      const [selectedOption, setSelectedOption] = useState("");
      const radioOptions = ["옵션 1", "옵션 2", "옵션 3"];
      const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
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
                  <li className='usercheck-button'>{button && <Button buttonStyle='btn--outline' onClick={handleSubmit}>로그인</Button>}</li>
              </ul>
          </nav>
           <div>
           <p>설문지 뭐시기 이름 {selectedOption}</p>
           {radioOptions.map((option) => (
             <div key={option}>
               <input
                 type="radio"
                 id={option}
                 name="options"
                 value={option}
                 checked={selectedOption === option}
                 onChange={() => handleRadioChange(option)}
               />
               <label htmlFor={option}>{option}</label>
             </div>
           ))}
           
         </div>
         </>
      )
}

export default MyPage;