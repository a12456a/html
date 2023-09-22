/**프리미엄 식품관**/
    $(function(){
      $.ajax({
        url : "./js/priemium.json",
        dataType : "json",
        success : function(data){
          for (let i =0; i<data.length; i++){
            let product = data[i];
            let image = product["image"];
            let title = product["title"];
            let price = product["price"];
            let salePrice = product["salePrice"];

            let temp_html = `<div class="P_img">
            <img src="${image}" alt="P_product1">
          </div>

          <div class="P_content">
            <p>${title}</p>
            <span id="price">${price}</span>
            <span>${salePrice}</span>
            <span id="won">원</span>
            <div class="btn">
              <img src="img/bag1.png" alt="bag">
            </div>
          </div>`;
          $(".priemium_data").eq(i).append(temp_html);
          }
        }
      });
    });

    /**잘나가요, 이 상품**/
    $(function () {
      $.ajax({
        url: "./js/best.json",
        dataType: "json",
        success: function (data) {
          for (let i = 0; i < data.length; i++) {
            let product = data[i];
            let image = product["url"];
            let brand = product["brand"];
            let title = product["title"];
            let salePrice = product["salePrice"];
            let price = product["price"];
            let btn = product["btn"];
            let star = product["star"];
            let review = product["review"];
            let top = product["top"];

            let temp_html = `<div class="b_img">
                        <img src=${image} alt="b_product1">
                        <div class="best">BEST <br> ${top}</div>
                        </div>

                    <div class="b_con">
                        <img src="img/orga.png" alt="orga">
                        <h3>${brand}</h3>
                        <p>${title}</p>
                        <span id="price">${price}</span>
                        <span>${salePrice}</span>
                        <span id="won">원</span>
                        <div class="btn">
                          <img src=${btn} alt="bag"> </div>

                        <div id="star">
                            <img src=${star} alt="star">
                            <img src=${star} alt="star">
                            <img src=${star} alt="star">
                            <img src=${star} alt="star">
                            <img src=${star} alt="star">
                            <span>${review}</span>
                        </div>
                    </div>`;
            $('.data').eq(i).append(temp_html);
          }
        }
      });
    });

    /**NEW, 제일 먼저 만나요**/
    $(function(){
      $.ajax({
        url : "./js/new.json",
        dataType : "json",
        success : function(data){
          for (let i=0; i < data.length; i++){
            let product = data[i];
            let image = product["image"];
            let small_image = product["small_image"];
            let brand = product["brand"];
            let title = product["title"];
            let salaPrice = product["salaPrice"];
            let price = product["price"];

            let temp_html = `<img src="${image}" alt="new_product1">
                              <div class="n_img">
                              <div class="best">BEST</div>
  <img src="${small_image}" alt="new_small1">
</div>
<div class="n_c1">
  <h3>${brand}</h3>
  <p>${title}</p>
  <span id="price">${price}</span>
  <span>${salaPrice}</span>
  <span id="won">원</span>
  <div class="btn">
    <img src="img/bag1.png" alt="bag">
  </div>
</div>`;
$('.data2').eq(i).append(temp_html);
          }
        }
      });
    });

    /**요즘, 많이 찾는 상품**/
    $(function(){
      $.ajax({
        url : "./js/recently.json",
        dataType : "json",
        success : function(data){
          for (let i=0; i < data.length; i++){
            let product = data[i];
            let image = product["image"];
            let brand = product["brand"];
            let title = product["title"];
            let salePrice = product["salePrice"];
            let price = product["price"];

            let temp_html = `<img src="${image}" alt="recently_product2">
            <h3>${brand}</h3>
            <p>${title}</p>
            <span id="price">${price}</span>
            <span>${salePrice}</span>
            <span id="won">원</span>
            <div class="btn">
              <img src="img/bag1.png" alt="bag">
            </div>`;
$('.data3').eq(i).append(temp_html);
          }
        }
      });
    });


    /**만나요, 풀무원 모든 브랜드**/
    $(function(){
      $.ajax({
        url : "./js/total_brand.json",
        dataType : "json",
        success :function(data){
          for (let i=0; i< data.length; i++){
            let product = data[i];
            let image = product["image"];
            let brand =product["brand"];
            let title = product["title"];
            let price = product ["price"];
            let salePrice = product["salePrice"];
            let review = product["review"];
            let temp_html = `<div class="B_img">
            <img src="${image}" alt="Brand_product1">
          </div>

          <div class="B_content">
            <img src="img/orga.png" alt="orga">
            <h3>${brand}</h3>
            <p>${title}</p>
            <span id="price">${price}</span>
            ${salePrice !== "" ? `<span>${salePrice}</span>` : ''} 
            <span id="won">원</span>
            <div class="btn">
              <img src="img/bag1.png" alt="bag">
            </div>

            <div id="star">
              <img src="img/green_star.png" alt="star">
              <img src="img/green_star.png" alt="star">
              <img src="img/green_star.png" alt="star">
              <img src="img/green_star.png" alt="star">
              <img src="img/green_star.png" alt="star">
              <span>${review}</span>
            </div>
          </div>`;
          
          $(".data4").eq(i).append(temp_html);
          }
        }
      });
    });