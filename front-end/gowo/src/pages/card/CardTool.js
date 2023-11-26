import React, { useState, useEffect } from 'react';
import CardItem from './Carditem';
import './CardTool.css';
//import { Link } from 'react-router-dom';


function Cards() {
    const pageSize = 16; // 페이지에 표시할 카드 개수
    const cardsPerRow = 4; // 카드 열 개수
    const pagesToShow = 5; // 표시할 페이지 번호 개수
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryData, setCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // 페이지를 다시 1로 설정
    };

    useEffect(() => {
        // API에서 카테고리 데이터 가져오기
        fetch('https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/tool/category')
          .then(response => response.json())
          .then(categoryData => {
            setCategoryData(categoryData.category);
            setSelectedCategory(categoryData.category[1]);
          })
          .catch(error => {
            console.error('Error fetching category data:', error);
          });
      }, []);

    useEffect(() => {
        if (selectedCategory !== "전체") {
          // API에서 데이터 가져오기
          fetch(`https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/tool?tool=${selectedCategory}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(apiData => {
              setData(apiData);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
        else{
            fetch(`https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/tool`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(apiData => {
              setData(apiData);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }, [selectedCategory, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    // 페이지 수 계산
    const totalPages = Math.ceil(data.length / pageSize);
    // 페이지네이션에서 표시할 페이지 번호 계산
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    // 현재 페이지의 데이터 계산
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = data.slice(startIndex, endIndex);

    return (
        <>

            <nav id='category'>
                <ul>
                    {categoryData.map((category, index) => (
                        <li
                            key={index}
                            className={`cat-item ${category === selectedCategory ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
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
                                        label={item.health}
                                        video={item.videoUrl}
                                        start={item.startTime}
                                    />
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                {/* 페이지네이션 컨트롤 */}
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
                        <button
                            key={startPage + i}
                            onClick={() => handlePageChange(startPage + i)}
                            className={startPage + i === currentPage ? 'active' : ''}
                        >
                            {startPage + i}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {'>'}
                    </button>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        {'>>'}
                    </button>
                </div>
            </div>


        </>
    );

}

export default Cards;