$(window).ready(function () {
  // api 주소 > json 주소가 어디인지 찾기
  var LOGO_DATA_URL = "/apis/logodata.json";
  // API 를 통한 데이터 불러오기 : request
  // API 를 통해 불러온 결과물 : response
  $.ajax({
    url: LOGO_DATA_URL,
    method: "GET",
    datatype: "json",
    success: function (result) {
      // 1. json 뜯기
      // 2. 반복해서 html 태그를 생성
      var logoHtml = "";
      for (var i = 0; i < result.length; i++) {
        var data = "";
        data += "<div class='swiper-slide'>";
        data += "<img src='";
        data += "./images/etc/";
        data += result[i].imgUrl;
        data += "' alt='";
        data += result[i].desc;
        data += "' />";
        data += "</div>";
        // `<div class="swiper-slide"><img src="/images/etc/${result[i].imgUrl}" alt="${result[i].desc}" /></div>`;
        logoHtml += data;
      }
      // 3. 생성된 html 을 원하는 곳에 배치
      var headerLogoTag = $(".header-logo-motion .swiper-wrapper");
      headerLogoTag.html(logoHtml);
      // 4. swiper 생성 및 실행
      var headerLogo = new Swiper(".header-logo-motion", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 700,
        effect: "fade",
        // fade 겹치지 않게
        fadeEffect: {
          crossFade: true,
        },
      });
      // 추가 1: 일단 멈춘 상태로
      headerLogo.autoplay.stop();
      // 추가 2: 마우스를 올리면 다시 플레이
      headerLogoTag.on("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      headerLogoTag.on("mouseleave", function () {
        headerLogo.autoplay.stop();
        // 추가 3: 마우스가 떠나면 다시 첫 슬라이드로
        headerLogo.slideToLoop(0);
      });
    },
    error: function (error) {},
  });

  /*   // vanilla JS
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      // 2. 반복해서 html 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<div class="swiper-slide"><img src="/images/etc/${result[i].imgUrl}" alt="${result[i].desc}" /></div>`;
        logoHtml += data;
      }
      // 3. 생성된 html 을 원하는 곳에 배치
      const headerLogoTag = document.querySelector(
        ".header-logo-motion .swiper-wrapper"
      );
      headerLogoTag.innerHTML = logoHtml;
      // 4. swiper 생성 및 실행
      const headerLogo = new Swiper(".header-logo-motion", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 700,
        effect: "fade",
        // fade 겹치지 않게
        fadeEffect: {
          crossFade: true,
        },
      });
      // 추가 1: 일단 멈춘 상태로
      headerLogo.autoplay.stop();
      // 추가 2: 마우스를 올리면 다시 플레이
      headerLogoTag.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      headerLogoTag.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        // 추가 3: 마우스가 떠나면 다시 첫 슬라이드로
        headerLogo.slideToLoop(0);
      });
    })
    .catch(function (error) {
      console.log(error);
    }); */
});
