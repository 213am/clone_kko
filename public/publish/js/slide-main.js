window.addEventListener("load", function () {
  const SLIDE_DATA_URL = "./apis/mainSlide.json";

  fetch(SLIDE_DATA_URL)
    .then(function (response) {
      // console.log(response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log(result);
      let htmlMainSlide = "";

      for (i = 0; i < result.length; i++) {
        const obj = result[i];
        // pc-active 와 mb-active 는 정해진 문법이 아닌
        // 원하는 결과를 도출하기 위해 각 상태 구분용으로 추가함
        const tag = `
          <div class="swiper-slide" pc-active="${obj.pc}" mb-active="${obj.mb}">
            <a href="${obj.url}">
              <img src="./images/${obj.pic}" alt="${obj.title}" />
              <span class="slide-title">${obj.title}</span>
            </a>
          </div>
        `;
        htmlMainSlide += tag;
      }
      const htmlMainSlideTag = document.querySelector("#visual-slide-api");
      htmlMainSlideTag.innerHTML = htmlMainSlide;

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide",
      );
      // console.log(slideList);

      slideList.forEach(function (item) {
        // console.log(item);
      });

      // 추가 : 현재 pc 버전인지 아닌지 확인하는 방법
      // 현재 브라우저의 크기를 확인해 pc 와 mobile 을 구분

      // 현재 브라우저의 크기가 pc 인지 mobile 인지 확인
      let windowState = "pc";
      const windowWidth = window.innerWidth;

      if (windowWidth > 1024) {
        if (windowState != "pc") {
          windowState = "pc";
          // console.log("PC version");
        }
      } else {
        if (windowState != "mb") windowState = "mb";
        // console.log("Mobile version");
      }
      // console.log(windowState);

      // 브라우저의 크기 변환 시 pc 인지 mobile 인지 확인
      window.addEventListener("resize", function () {
        const windowWidth = window.innerWidth;
        // console.log(windowWidth);

        if (windowWidth > 1024) {
          if (windowState != "pc") {
            windowState = "pc";
            // console.log("PC version");
          }
        } else {
          if (windowState != "mb") {
            windowState = "mb";
            // console.log("Mobile version");
          }
        }
      });

      const visualSlideSwiper = new Swiper(".visual-slide", {
        loop: true,
        pagination: {
          el: ".visual-slide .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 400,
      });
      // 개발자 추가 작업 : 마우스가 enter(마우스를 올리고 있으면)가 되면
      const visualSlide = document.querySelector(".visual-slide");
      // console.log(visualSlide);
      visualSlide.addEventListener("mouseenter", function () {
        // console.log("mouseenter");
        visualSlideSwiper.autoplay.stop();
      });
      visualSlide.addEventListener("mouseleave", function () {
        // console.log("mouseleave");
        visualSlideSwiper.autoplay.start();
      });
    })
    .catch(function () {});
});
