import {GetShopingList} from "./api.js"

const renderPage = async ()=>{
const shopinglist = await GetShopingList(1);
shopinglist.forEach(item => {
    console.log(item);
    const note = `
    <!-- item-list -->
    <div class=" col-12 col-md-4 px-2 py-2">
        <div class="parent-content">
            <div class="content">
                <div class="item-name name col-12">
                    <div class="col-6 px-1 py-1">
                        <input class="ii" type="text"
                            style="width:100%;" value="${item.foodStuffs}">
                    </div>
                    <div class="col-6 px-1 py-1">
                        <input class="ii" type="text"
                            style="width:100%;"  value="${item.quantity}">
                    </div>
                </div>
                <div class="item-meghdar mt-3">

                    <div class="col-12 px-1 py-1">
                        <span style="color:#fff ;">قیمت</span>
                        <input class="ii" type="text"
                            style="width:100%; value = "${item.price}"">
                    </div>
                   
                </div>
                <div class="item-factor">
                    <span style="color:#fff ;">فاکتور</span>
                    <img src="${item.factorImage}" alt="">  
                    <input class="ii" type="file"
                        style="width:100%; height:100px;" hidden>
                </div>
            </div>
        </div>
        
    </div>
    <!-- item-list -->
    `
    document.querySelector("#row").innerHTML += note
});

}
await renderPage()
