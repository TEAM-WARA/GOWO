import React from 'react'
import CardItem from './Carditem';
import './Cards.css';
import { Link } from 'react-router-dom';


class Cards extends React.Component {

    render() {
        return (
            <>
                <nav id='category'>
                    <ul>
                        <li class ="cat-item">이건 뭐고</li>
                        <li class ="cat-item">이건 이거고</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                        <li class ="cat-item">이건 저거다</li>
                    </ul>
                </nav>

                <div className='cards'>
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                <CardItem
                                    src="images/img-9.jpg"
                                    text="에 간단설명?"
                                    label='도구'
                                />
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
                                    src="images/img-9.jpg"
                                    text="Expore the hidden waterfall deep inside the Amazon Jungle"
                                    label='덤벨'
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
}
export default Cards;