import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { Link } from 'react-router-dom'; //router 사용 
import './NavBar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);  //클릭할때마다 전환()
    const closeMobileMenu = () => setClick(false);



    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        GOWO
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />  {/* fas = 무료 아이콘 라이브러리 (Font Awesome) */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                운동 장소
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                운동 부위
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/cards' className='nav-links' onClick={closeMobileMenu}>
                                운동 도구
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                운동 목적
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
                                나의 루틴
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar