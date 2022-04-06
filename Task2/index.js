const csv = require('csvtojson')
const AnalyticsFile=require('./index.js')
const arraySort=require('array-sort')
// Invoking csv returns a promise
let a = [];
const converter = csv().fromFile('./SalesRecords.csv').then((json) => {
    ; return a = JSON.parse(JSON.stringify(json))
})
    .then(value => { return arr(value); })
function arr(value) {
    const value1 = value;
    let reg = [];
    let k = 0;
    for (let i = 0; i < value.length; i++) {
        if (reg.includes(value[i].Region) == false) {
            reg[k] = value[i].Region;
            k++;
        }
    }
    //console.log(reg);
    regobj(reg, value1);
}
function regobj(reg, value1) {
    let countrysale=[];
    let countrynames=[];
    let Onlinesale=[];
    let Offlinesale=[];
    let UnitSold=[];
    let regi = [];
    let Category = [];
    let Revenue=[];
    let sal=[];
    for (let j = 0; j < reg.length; j++) {
        let TotalRevenue = 0, TotalCost = 0, TotalProfit = 0, Total_Cost = 0, Total_Profit = 0, Totalcost = 0, Totalprofit = 0;TotalSales=0;
        let array = [];
        let arra = [];
        let country = [];
        let k = 0, n = 0;
        let count = 0, flag = 0;
        for (let i = 0; i < value1.length; i++) {
            if (reg[j] == (value1[i].Region)) {
                TotalRevenue = parseFloat(TotalRevenue) + parseFloat(value1[i]['Total Revenue'])
                TotalCost = parseFloat(TotalCost) + parseFloat(value1[i]['Total Cost'])
                TotalProfit = parseFloat(TotalProfit) + parseFloat(value1[i]['Total Profit'])
                if (value1[i]['Sales Channel'] === "Online")
                    count++;
                else {
                    flag++;
                }
                TotalSales=count+flag;
                /* sal[j]=parseInt(TotalSales);
                Onlinesale[j]=count;
                Offlinesale[j]=flag; */
                if (Category.includes(value1[i]['Item Type']) == false) {
                    Category[k] = value1[i]['Item Type'];
                    k++;
                }
                //console.log(Category);y
                if (country.includes(value1[i].Country) == false) {
                    country[n] = value1[i].Country;
                    n++;
                }
            }
        }
        sal[j]=parseInt(TotalSales);
        Onlinesale[j]=count;
        Offlinesale[j]=flag;
       // console.log(sal);
        for (let m = 0; m < Category.length; m++) {
            TotalUnitsSold = 0;OnlineSales=0,OfflineSales=0;TotalSales=0,categoryrevenue=0;
            for (let i = 0; i < value1.length; i++) {
               // if (reg[j] == value1[i].Region) {
                    if (Category[m] == value1[i]['Item Type']) {
                        var Cat = Category[m];
                        TotalUnitsSold = parseFloat(TotalUnitsSold) + parseFloat(value1[i]['Units Sold'])
                        Total_Cost = parseFloat(Total_Cost) + parseFloat(value1[i]['Total Cost'])
                        Total_Profit = parseFloat(Total_Profit) + parseFloat(value1[i]['Total Profit'])
                        categoryrevenue=parseFloat(categoryrevenue) + parseFloat(value1[i]['Total Revenue'])
                        if(value1[i]['Sales Channel']=="Online"){
                        OnlineSales++;}
                        else{ OfflineSales++;}
                        TotalSales=OnlineSales+OfflineSales;
                    }
               // }
            }
            UnitSold[m]=TotalUnitsSold;
            Revenue[m]=categoryrevenue;
            let ob = {
                Category_Name: Category[m],
                TotalUnitsSold: TotalUnitsSold,
                TotalProfit: Total_Profit,
                TotalCost: Total_Cost,
                OnlineSales:OnlineSales,
                OfflineSales:OfflineSales,
                TotalSales:TotalSales
            };
            array.push(ob);
        }
        for (let l = 0; l < country.length; l++) {
            TotalSales= 0; Totalcost = 0, Totalprofit = 0
            for (let z = 0; z < value1.length; z++) {
                if (reg[j] == value1[z].Region) {
                    if (country[l] == value1[z].Country) {
                        Totalcost = parseFloat(Totalcost) + parseFloat(value1[z]['Total Cost'])
                        Totalprofit = parseFloat(Totalprofit) + parseFloat(value1[z]['Total Profit'])
                        if(value1[z]['Sales Channel'])
                        TotalSales++;
                    }
                }
            }
            let obc = {
                Country_Name: country[l],
                TotalProfit: Totalprofit,
                TotalCost: Totalcost,
                TotalSales:TotalSales
            };
            countrynames.push(country[l]);
            countrysale.push(TotalSales);
            arra.push(obc);
        }
        let obj = {
            Region: reg[j],
            TotalRevenue: TotalRevenue,
            TotalCost: TotalCost,
            TotalProfit: TotalProfit,
            Total_Online_Sales: count,
            Total_Offline_Sales: flag,
            Total_Categories: array,
            Array_of_Countries: arra
        };
        regi.push(obj);
    }
    console.log(Category);
    console.log(UnitSold);
    AnalyticsFile.Analytics(reg,Revenue,Category,UnitSold,Onlinesale,Offlinesale,countrynames,countrysale,sal);
}