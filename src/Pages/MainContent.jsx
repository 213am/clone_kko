import React from "react";
import ListNewWrap from "./ListNewWrap";
import Banner from "./Banner";
import ListCateWrap from "./ListCateWrap";
import CardList from "./CardList";

function MainContent() {
  return (
    <div className="main-content">
      <div className="left">
        {/* 최신 목록 */}
        <ListNewWrap></ListNewWrap>
        {/* 배너 */}
        <Banner></Banner>
        {/* 카테고리 목록 */}
        <ListCateWrap></ListCateWrap>
      </div>
      <div className="right">
        {/* 카드 목록 */}
        <CardList></CardList>
      </div>
    </div>
  );
}

export default MainContent;
