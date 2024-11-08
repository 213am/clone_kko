window.addEventListener("load", function () {
  /*   MockData
  { imgUrl: "경로", desc: "설명문" }
  [ { 이름: 값 }, { 이름: 값 }, { 이름: 값 }] array */

  // api 주소 > json 주소가 어디인지 찾기
  const LOGO_DATA_URL = "/apis/logodata.json";
  // API 를 통한 데이터 불러오기 : request
  // API 를 통해 불러온 결과물 : response
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      // console.log(response);
      const result = response.json();
      // console.log(result);
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      console.log(result);
      // 2. 반복해서 html 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<div class="swiper-slide"><img src="${result[i].imgUrl}" alt="${result[i].desc}" /></div>`;
        logoHtml += data;
      }
      console.log(logoHtml);
      // 3. 생성된 html 을 원하는 곳에 배치
      // 4. swiper 생성 및 실행
    })
    .catch(function (error) {
      console.log(error);
    });
  // const logoData;

  const headerLogo = new Swiper(".header-logo-motion", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 700,
    effect: "fade",
    // fade 겹치지 않게
    fadeEffect: {
      crossFade: true,
    },
  });
});
