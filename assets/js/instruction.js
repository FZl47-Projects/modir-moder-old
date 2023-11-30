import {getEducation,GetAllArticle} from './api.js'



const renderEducation=async ()=>{
    let education = await getEducation()

    education.forEach(item => {
        let note=` <div class="video-instuction-item col-12 col-md-4 px-1">
        <div class="inner-video-instuction">
          <div class="top">
            <div class="title">${item.description}</div>
            <div class="video">
                <video controls src="${item.file}" poster="${item.poster}"></video>
            </div>
          </div>
        </div>
    </div>
    `
    document.querySelector("#educations").innerHTML+=note
    });
}
renderEducation();

const RenderArticle=async ()=>{
    let education = await GetAllArticle()

    education.forEach(item => {
        console.log(item);
        let article =` <div class="swiper-slide" style="cursor:pointer"" onclick="location.href='./each-article.html?id=${item.id}'">
        <div class="article-item">
            <div class="inner-article">
              <div class="top">
                <div class="title">${item.title}</div>
                <div class="image-article">
                    <img src="${item.image}" alt="">
                </div>
              </div>
            </div>
        </div>
        </div>`
    document.querySelector("#article").innerHTML+=article
    });
}
RenderArticle()