# node-bitrefill
## Description
Simple to use package to work with bitrefill API (Using PublicApiKey)

## Installation
    $ npm install node-bitrefill
    
## Usage
``` javascript
var btrf = require ('node-bitrefill');
var bitrefill = new btrf();
var number,operatorSlug,email,paymentMethod,token,ifProxy;
//EXAMPLE
number = "+79253139585";
operatorSlug = "megafon-center-russia";
email = "1@1.ru";
paymentMethod = "ethirium";
token = ""; //Public API Key
ifProxy = 'http://127.0.0.1:8121';

bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy); //returns Promise

//Also u can use Promise.all([bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy)]).then(ok=>{ // promise that //makes request to bitrefill with new order
//     console.log(ok)
// })
// To get response body

var orderID = "5cdc3e24172c3400047cad6c";

bitrefill.getOrder(orderID, token); //returns Promise

//You can also use Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{  //promise that makes request to bitrefill and gets info //about the order
//      console.log(ok)
//  })
// To get response

bitrefill.lookupNumber(number, token); //returns Promise

//You can also use Promise.all([bitrefill.lookNumber(number)]).then(ok=>{ //promise that makes request to bitrefill and gets info //about number and operator slugs
//      console.log(ok)
//  })
// To get response

```

``` javascript
 placeOrder(string(number), string(operatorSlug), string(email), string(paymentMethod), string (public_token), string (proxy_address))
 //
 getOrder(string(orderID), string(token));
//
 lookupNumber(string(number), string(token));
```

## License

  [MIT](LICENSE)

