# node-bitrefill
## Description
Simple to use package to work with bitrefill API

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

bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy); 

//Also u can use Promise.all([bitrefill.placeOrder(number,operatorSlug,email,paymentMethod,token,ifProxy)]).then(ok=>{ // promise that //makes request to bitrefill with new order
//     console.log(ok)
// })
// To get response body

var orderID = "5cdc3e24172c3400047cad6c";

bitrefill.getOrder(orderID, token);

//You can also use Promise.all([bitrefill.getOrder(orderID, token)]).then(ok=>{  //promise that makes request to bitrefill and gets info //about the order
//      console.log(ok)
//  })
// To get response

bitrefill.lookupNumber(number, token);

//You can also use Promise.all([bitrefill.lookNumber(number)]).then(ok=>{ //promise that makes request to bitrefill and gets info //about number and operator slugs
//      console.log(ok)
//  })
// To get response

```

### random()
Returns a string with valid imei. Script makes string with 3 parts:
1st part is TAC (Type Allocation Code)
2nd part is random value from 100000 to 999999
3rd part is last digit(Luhn digit)

### isValid(imei)
Returns a boolean value.

## License

  [MIT](LICENSE)

