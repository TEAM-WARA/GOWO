import React,{useState,useEffect} from 'react';
import CardItem from './Carditem';
import './Cards.css';
//import { Link } from 'react-router-dom';


function Cards() {
    const [data, setData] = useState([]);

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
                setData(apiData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
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
                        <ul className="cards__items">

                            <CardItem
                                src="images/img-9.jpg"
                                text="아"
                                label='밴드'
                            />
                            <CardItem
                                src="images/img-2.jpg"
                                text="이"
                                label='줄넘기'
                            />
                            <CardItem
                                src="images/img-2.jpg"
                                text="우"
                                label='물통'
                                path='/services'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src="http://openapi.kspo.or.kr/web/image/0AUDLJ08S_00041/0AUDLJ08S_00041_SC_00067.jpeg"
                                text="허리 숙여 발목잡기"
                                label='준비 운동'
                                video='http://openapi.kspo.or.kr/web/video/0AUDLJ08S_00041.mp4'
                            />
                            <CardItem
                                src='images/img-3.jpg'
                                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                label='뭐 예를들자면'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Experience Football on Top of the Himilayan Mountains'
                                label='도구이름'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='이름도구'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Cards;