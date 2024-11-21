window.addEventListener("load", function () {
  const EDITORS_DATA_URL = "./apis/editors.json";
  //   console.log(EDITORS_DATA_URL);

  fetch(EDITORS_DATA_URL)
    .then(function (response) {
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      let editorsHtmlWrap = "";
      let editorsHtml = "";

      for (let i = 0; i < result.length; i++) {
        // 현재 실행되는 순서 0, 1, 2, 3
        const obj = result[i];

        editorsHtml += `
            <a href="${obj.link}" class="thum">
                <div class="thum-img">
                    <img src="./images/${obj.imgpath}" alt="${obj.category}" />
                </div>
                <div class="thum-cate">
                    <img
                    src="./images/icon/${obj.icon}"
                    alt="${obj.category}"
                    />
                    <h4 style="color:${obj.txtcolor}">${obj.category}</h4>
                </div>
                <h5 class="thum-title">${obj.title}</h5>
                <span class="thum-date">${obj.day}</span>
            </a>
        `;
        // console.log(editorsHtml);
        let tag = "";
        // 3개씩 배치하는 div 형태
        // i 가 0일때 예외처리 위한 코드
        if ((i + 1) % 3 == 0) {
          tag = `
          <div class="list">
            ${editorsHtml}
          </div>`;
          // 3개를 다 채웠다. 그렇다면 다시 만들자
          // a 태그 목록만 다시 만들기 위해 비우자
          editorsHtml = "";
        } else if (i == result.length - 1) {
          tag = `
            <div class="list">
              ${editorsHtml}
            </div>`;

          editorsHtml = "";
        }
        editorsHtmlWrap += tag;
      }
      //   console.log(editorsHtmlWrap);
      const editorsHtmlWrapTag = document.querySelector("#editors-api");
      //   console.log(editorsHtmlWrapTag);
      editorsHtmlWrapTag.innerHTML = editorsHtmlWrap;
    })
    .catch(function () {});
});
