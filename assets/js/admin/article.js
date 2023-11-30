// import api 
import { GetAllArticle,DeleteArticle } from "../api.js";
// function  for show all article 
const renderArticle = async ()=>{

    let articles = await GetAllArticle()
    articles.forEach(item => {
        let element = `<div class="article-item col-12 col-md-4 px-1">
        <div class="inner-article">
          <div class="top">
            <div class="title">${item.title}</div>
            <div class="image-article">
                <img src="${item.image}" alt="">
            </div>
          </div>
          <div class="down">
              <span class="Add-article"><img src="../assets/images/edit-icon.png" alt=""></span>
              <span id="trash" data-id=${item.id} class="trash"><img src="../assets/images/trash.png" alt="" ></span>
          </div>
        </div>
    </div>`
    document.querySelector("#article").innerHTML +=element
    });
}
await renderArticle()

// remove article
const trash = document.querySelectorAll("#trash")
trash.forEach(async item=>{
    item.addEventListener('click' ,async()=>{
    const id = item.getAttribute('data-id');
     console.log(await DeleteArticle(id))
    })
})

const add=  document.querySelector("#add_article")
add.addEventListener('click',()=>{
    location.href="./add-articles.html"
})