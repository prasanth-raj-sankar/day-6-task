var request = new XMLHttpRequest()

request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res);

//a.Get all the countries from the Asia continent /region using the Filter function

var data = res.filter((ele)=>ele.region == "Asia");
console.log(data)


// b.Get all the countries with a population of less than 2 lakhs using Filter method

var all = res.filter((ele)=>ele.population < 200000);
console.log(all)


// c.Print the following details name, capital, flag, using forEach method

res.forEach((element)=>{
    console.log(element.name,element.capital,element.flag);
})


// d.Print the total population of countries using reduce method

var tot = res.filter((ele)=> ele.population)
var cpopu = tot.reduce((acc,cv)=>acc+cv.population,0)
console.log(cpopu)


// e.Print the country that uses US dollars as currency.

// var usd = res.filter((spr)=>spr.currencies == "United States dollar")
// var dollar = usd.map((spr)=>spr.name.symbol);
// console.log(dollar); 

// var currency = res.filter((element) => {
//     for(let key in element.currencies){
//        if(element.currencies[key].code === "USD"){
//            return element;
//        }
//     }
//   })
//        console.log(currency);



}



// e.Print the country that uses US dollars as currency.


var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");

req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }