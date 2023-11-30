import {GetAllSubscription} from "../api.js"
import {separate} from "../Services.js"
const renderPakage = async ()=>{
    const subscription = await GetAllSubscription()
    
    subscription.forEach(item=>{
      const note = `  <div class="col-12 col-md-4 p-2">
      <div class="content-pakage">
          <div class="name-pakage">
              <span>${item.name}</span>


          </div>
          <div class="des">
            ${item.description}
          </div>
          <div class="price">
              <p> ${separate(item.price-(item.discount*item.price)/100)} 
                  <del  class="${item.discount==0 ? "d-none text-light":''}"> ${separate(item.price)} </del>
               </p> 
          </div>
                         

          </div>

    </div>`    
      document.querySelector("#row").innerHTML +=note
    })
    }
    
    
    await renderPakage()