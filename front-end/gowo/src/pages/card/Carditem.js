import React from 'react';

function CardItem(props) {
  const openPopup = () => {
    window.open('https://www.example.com', '팝업 창', 'width=600,height=400');
  };

  return (
    <>
      <li className='cards__item' onClick={openPopup}>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
