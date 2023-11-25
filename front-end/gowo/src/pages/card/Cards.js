import React, { useState, useEffect } from 'react';
import CardItem from './Carditem';
import './Cards.css';
//import { Link } from 'react-router-dom';


function Cards() {
    const pageSize = 16; //
    const cardsPerRow = 4; // 카드 열 개수
    const pagesToShow = 5; // 표시할 페이지 번호 개수
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // API에서 데이터 가져오기
        fetch('https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/area/read/하체')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(apiData => {
                console.log('Fetched data:', apiData);
                setData(apiData.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [currentPage]);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    // 페이지 수 계산
    const totalPages = Math.ceil(data.length / pageSize);

    // 현재 페이지의 데이터 계산
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = data.slice(startIndex, endIndex);

    return (
        <>

            <nav id='category'>
                <ul>
                    <li class="cat-item">하체</li>
                    <li class="cat-item">이건 이거고</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                    <li class="cat-item">이건 저거다</li>
                </ul>
            </nav>

            <div className='cards'>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        {/* 변경된 부분: 카드를 4개씩 4줄로 나열 */}
                        {Array.from({ length: Math.ceil(currentPageData.length / cardsPerRow) }).map((_, rowIndex) => (
                            <ul key={rowIndex} className="cards__items">
                                {currentPageData.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map(item => (
                                    <CardItem
                                        key={item.id}
                                        src={item.imageUrl}
                                        text={item.workOutName}
                                        label={item.workOutDivision}
                                        video={item.videoUrl}
                                    />
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                {/* 페이지네이션 컨트롤 */}
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                      {'<'}  
                    </button>
                    <span>{currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                       {'>'}
                    </button>
                </div>
            </div>


        </>
    );

}

export default Cards;