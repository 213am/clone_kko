window.addEventListener("load", function () {
  // api 주소(/apis/news.json) 를 request
  const NEWS_DATA_URL = "/apis/news.json";
  // 연산 처리 : html 생성
  fetch(NEWS_DATA_URL)
    .then(function (response) {
      //   console.log("뉴스: ", response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      //   console.log("뉴스 결과: ", result);
      // html 만들기
      let htmlNews = "";
      for (let i = 0; i < 3; i++) {
        // 각 세부 html 글자 만들기
        /*  <span> 태그에서 text color 를 바꾸려면
        <span style="color:색상"></span> */
        const tag = `
        <a href="${result[i].link}" class="thum">
            <div class="thum-img">
                <img src="./images/${result[i].imgpath}" alt="${result[i].category}" />
            </div>
            <div class="thum-cate">
                <img
                src="./images/icon/${result[i].icon}"
                alt="${result[i].category}"
                />
                <span style="color:${result[i].txtcolor}">${result[i].category}</span>
            </div>
            <h5 class="thum-title">
            ${result[i].title}
            </h5>
            <span class="thum-date">${result[i].day}</span>
        </a>`;
        // console.log(tag);
        // 모든 html 글자 하나로 합치기
        htmlNews += tag;
      }
      // console.log(htmlNews);
      // html 출력하기
      const htmlNewsTag = document.querySelector("#news-api");
      //   console.log(htmlNewsTag);
      htmlNewsTag.innerHTML = htmlNews;
    })
    .catch(function () {});
});
