var btrf = require ('./scr/btrfapi');
var bitrefill = new btrf();
var number,operatorSlug,email,paymentMethod,token,ifProxy;

number = "+79253139585";
operatorSlug = "megafon-center-russia";
email = "1@1.ru";
paymentMethod = "ethirium";
token = ""; //Public API Key
ifProxy = 'http://127.0.0.1:8121';

bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy);

//Also u can use Promise.all([bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy)]).then(ok=>{
//     console.log(ok)
// })
// To get response


var orderID = "5cdc3e24172c3400047cad6c";

bitrefill.getOrder(orderID, token);
Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{
     console.log(ok)
  })

//You can also use Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{
//      console.log(ok)
//  })
// To get response

bitrefill.lookupNumber(number, token);

//You can also use Promise.all([bitrefill.lookNumber(number)]).then(ok=>{
//      console.log(ok)
//  })
// To get response