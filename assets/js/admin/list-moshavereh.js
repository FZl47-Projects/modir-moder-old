import{Insertcounseling} from '../api.js'
const render = async ()=>{
    const moshavereh = await Insertcounseling("","GET")
    console.log(moshavereh);
    moshavereh.forEach(item => {
        console.log(item);
        const note=`<div class="col-12 col-md-6 px-2">
        <a href="./cost-control-menu-admin.html?id=${item.user.id}"
            class="item-content">
            <span>${item.user.name} </br> ${item.date} </span>
            <span dir="ltr">${item.condition=="ip"?"حضوری":"تلفنی"}</br> ${item.user.phone_number}</span>
            <span>${item.job} </br> ${item.city}</span>
        </a>
        
        </div>`
        document.querySelector("#row-1").innerHTML +=note
    });
}
render()