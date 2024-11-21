import React from "react";

function ListCateWrap() {
  return (
    <div className="list-cate-wrap">
      <h4 className="list-title">Editor`s Pick 🏃🏻‍♀️🏃‍♂️🏃🏽</h4>
      <div className="list-thum-wrap" id="editors-api"></div>
      <div className="list-bt-wrap">
        <button id="bt-more" className="bt">
          더보기
        </button>
      </div>
    </div>
  );
}

export default ListCateWrap;
