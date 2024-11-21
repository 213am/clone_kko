window.addEventListener("load", function () {
  const CARD_DATA_URL = "./apis/cards.json";

  fetch(CARD_DATA_URL)
    .then(function (response) {
      //   console.log("카드: ", response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      // console.log("카드 결과: ", result);
      let htmlMbCard = "";
      for (let i = 0; i < 5; i++) {
        const tag = `
        <div class="swiper-slide">
            <a href="${result[i].link}" class="list-card">
                <div class="card-img">
                    <img src="./images/${result[i].imgpath}" alt="${result[i].cardname}" />
                </div>
                <div class="card-info">
                    <div class="card-name">${result[i].cardname}</div>
                    <div class="card-number">${result[i].cardno}</div>
                </div>
            </a>
        </div>`;
        // console.log(tag);
        htmlMbCard += tag;
      }
      //   console.log(htmlCard);
      const htmlMbCardTag = document.querySelector("#mb-card-api");
      //   console.log(htmlCardTag);
      htmlMbCardTag.innerHTML = htmlMbCard;

      const mbCardSlide = new Swiper(".mb-card-slide-wrap", {
        slidesPerView: 4,
        loop: true,
      });
    })
    .catch(function () {});
});
