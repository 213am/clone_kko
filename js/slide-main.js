window.addEventListener("load", function () {
  const SLIDE_DATA_URL = "/apis/mainSlide.json";

  fetch(SLIDE_DATA_URL)
    .then(function (response) {
      // console.log(response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      console.log(result);
      let htmlMainSlide = "";

      for (i = 0; i < result.length; i++) {
        const obj = result[i];

        const tag = `
          <div class="swiper-slide">
            <a href="${obj.url}">
              <img src="./images/${obj.pic}" alt="${obj.title}" />
            </a>
          </div>
        `;
        htmlMainSlide += tag;
      }
      const htmlMainSlideTag = document.querySelector("#visual-slide-api");
      htmlMainSlideTag.innerHTML = htmlMainSlide;

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
