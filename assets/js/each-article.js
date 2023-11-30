import {GetArticleWithUser} from "./api.js"
/* ----------------دکمه بازگشت---------------------- */
const backPage = () => {
    history.back();
  };
  /* ----------------دکمه بازگشت---------------------- */
/*------------------------back page icon-------------------*/
let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  backPage();
});
/*------------------------back page icon-------------------*/

// get id from url
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
// ---------


const renderPage=async ()=>{
  const article = await GetArticleWithUser(id)
let text  =article.text
text = text.replaceAll("\n","</br>")
console.log(text);

    const note =`

    <div class="col-12 col-md-5">
                          <div class="image-article">
                              <img id="image" src="${article.image}" alt="">
                          </div>
                      </div>
                      <div class="col-12">
                          <h1 class="dis-article title">${article.title}</h1>
                          <div class="dis-article body">
                         ${text}
                          </div>
                      </div>`
                      document.querySelector("#row").innerHTML=note
    
 
}
await renderPage()