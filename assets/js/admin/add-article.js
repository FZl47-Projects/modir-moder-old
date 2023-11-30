// import alert from services
import {successAlert} from "../Services.js"
// get element with id 
const title = document.querySelector("#title")
const body = document.querySelector("#des-request")
const articleImg = document.querySelector("#javaz")
const submit = document.querySelector("#submit")
// onclick for insert article
submit.addEventListener('click',()=>{
   console.log(title.value);

    if(title.value!=undefined && title.value !="" && title.value !=" "){
        if(body.value!=undefined && body.value!=""){
        if(articleImg.files[0]!=undefined){
          // creat data 
            var formdata = new FormData();
            formdata.append("image",articleImg.files[0],articleImg.value);
            formdata.append("text",body.value);
            formdata.append("title",title.value);
            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            // send data 
            fetch("http://185.255.88.172:8000/article/all/", requestOptions)
          .then(response => response.json())
          .then(result =>{
            successAlert("success","مقاله جدید ثبت شد!")
            setTimeout(()=>{
                location.href="./articles.html"
            },2000)
          })
            }else{
             successAlert("error","عکس مقاله را وارد کنید")

            }
        }else{
        successAlert("error","متن مقاله را وارد کنید")

        }
}else{
    successAlert("error","عنوان را وارد کنید")

}
})



