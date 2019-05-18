var btrf = require ('./scr/btrfapi');
var bitrefill = new btrf();
var number,operatorSlug,email,paymentMethod,token,ifProxy;

number = "79675714702";
operatorSlug = "beeline-russia";
email = "1@1.ru";
paymentMethod = "ethereum";
token = "Token"; //Public API Key
ifProxy = 'http://127.0.0.1:8121';
var value = "10";

 bitrefill.placeOrder(number,operatorSlug,email,value, paymentMethod,token,ifProxy);

Promise.all([bitrefill.placeOrder(number,operatorSlug,email,value, paymentMethod,token,ifProxy)]).then(ok=> {
    console.log(ok)
})
//Also u can use Promise.all([bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy)]).then(ok=>{
//     console.log(ok)
// })
// To get response


 var orderID = "5cdf2ea66a04b300047b3ac7";
//
// bitrefill.getOrder(orderID, token);
//  Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{
//       console.log(ok)
//    })

//You can also use Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{
//      console.log(ok)
//  })
// To get response

// bitrefill.lookupNumber(number, token);

//You can also use Promise.all([bitrefill.lookNumber(number)]).then(ok=>{
//      console.log(ok)
//  })
// To get response
