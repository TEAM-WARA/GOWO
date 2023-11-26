import React from "react";

function CardItem(props) {
  const openPopup = () => {
    const videoUrl = props.video;
    const startTime = props.start || 0; // 시작 지점이 없을 경우 0으로 기본값 설정

    // 새 창을 열고 동영상을 포함한 HTML을 로드
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>동영상 팝업</title>
      </head>
      <body>
        <div style="text-align: center;">
          <video controls width="80%" height="80%" autoplay>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <script>
          // 동영상 시작 지점 설정
          document.querySelector('video').currentTime = ${startTime};
        </script>
      </body>
      </html>
    `);
  };

  return (
    <>
      <li className="cards__item" onClick={openPopup}>
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
