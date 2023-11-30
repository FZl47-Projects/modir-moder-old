import  {GetArticleWithUser} from "../api.js"
// get id from url
 var url_string = window.location.href; 
 var url = new URL(url_string);
 var id = url.searchParams.get("id");
 const article = await GetArticleWithUser(id)
 console.log(article);
 document.querySelector("#title").value = article.title
 document.querySelector("#image").src = article.image
 document.querySelector("#description").innerHTML= article.text