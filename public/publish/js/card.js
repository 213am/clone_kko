window.addEventListener("load", function () {
  const CARD_DATA_URL = "apis/cards.json";

  fetch(CARD_DATA_URL)
    .then(function (response) {
      //   console.log("카드: ", response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      //   console.log("카드 결과: ", result);
      let htmlCard = "";
      for (let i = 0; i < 5; i++) {
        const tag = `
            <a href="${result[i].link}" class="list-card">
                <div class="card-img">
                    <img src="/images/${result[i].imgpath}" alt="${result[i].cardname}" />
                </div>
                <div class="card-info">
                    <div class="card-name">${result[i].cardname}</div>
                    <div class="card-number">${result[i].cardno}</div>
                </div>
            </a>
       `;
        // console.log(tag);
        htmlCard += tag;
      }
      //   console.log(htmlCard);
      const htmlCardTag = document.querySelector("#card-api");
      //   console.log(htmlCardTag);
      htmlCardTag.innerHTML = htmlCard;
    })
    .catch(function () {});
});
