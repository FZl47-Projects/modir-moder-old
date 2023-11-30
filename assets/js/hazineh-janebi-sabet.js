import {GetCostWithUser} from "./api.js"
import {CheckLogin} from './Services.js'
const userid=CheckLogin();

const Cost = await GetCostWithUser(userid)
console.log(Cost);
let bill = Cost.filter(item=>item.condition=="bi")
let Billprice=0
bill.forEach(element => {
  Billprice+=element.price
});
let food = Cost.filter(item=>item.condition=="food")
let Foodprice=0
food.forEach(element => {
  Foodprice+=element.price
});

let income = Cost.filter(item=>item.condition=="in")
let Incomeprice=0
income.forEach(element => {
  Incomeprice+=element.price
});

let rent = Cost.filter(item=>item.condition=="re")
let Rentprice=0
rent.forEach(element => {
  Rentprice+=element.price
});

am4core.ready(function() {
            
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        country: "غذا",
        litres: Foodprice
        
      },
      {
        country: "اجاره ماهانه",
        litres: Rentprice
      },
      {
        country: "حقوق کارمندان",
        litres:Incomeprice
      },
      {
        country: "قبض",
        litres:Billprice
      },
      
    
    ];
    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    
    }); // end am4core.ready()