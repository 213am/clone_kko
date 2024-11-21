import React from "react";

function MbCardSlide() {
  return (
    <>
      <h4 className="list-title">폴더 📁</h4>
      <div className="swiper mb-card-slide-wrap">
        <div className="swiper-wrapper" id="mb-card-api"></div>
      </div>
      <div className="list-bt-wrap">
        <button id="bt-mb-more-card" className="bt">
          전체보기
        </button>
      </div>
    </>
  );
}

export default MbCardSlide;
