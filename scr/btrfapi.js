
var bitrefill = function () {
    this.placeOrder = newOrder;
    this.getOrder = lookOrder;
    this.lookupNumber = lookNumber;
}

module.exports = bitrefill;

var rp = require("request-promise");

async function newOrder(number,operatorSlug,email,paymentMethod,token,ifProxy) {
    if(!ifProxy) ifProxy ='';

var postBody = {
        "email":email,
        "dashboardRefill":true,
        "operatorSlug":operatorSlug,
        "valuePackage":15000,
        "isSubscribing":false,
        "paymentMethod":paymentMethod,
        "number":number
    };
var postHeader = {
    'authorization': token,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Content-Type': 'application/json',
    'Content-length': JSON.stringify(postBody).length.toString()
};

var config = {
    method:'POST',
    uri: 'https://www.bitrefill.com/api/widget/order?',
    strictSSL: true,
    proxy: ifProxy,
    headers: postHeader,
    body: JSON.stringify(postBody)
}

    try {
         response = await rp(config);
        return (response);
    }
    catch (error) {
        return false;
    }


}



async function lookOrder(orderID,token, ifproxy) {
    if (!ifproxy) ifproxy = ''

    var getHeader = {
        'Content-Type': 'application/json',
        'Content-Length':'0',
        'authorization': token
    };
    var config = {
        method:'GET',
        uri: 'https://www.bitrefill.com/api/widget/order/' + orderID,
        // resolveWithFullResponse: true,
        strictSSL: true,
        proxy: ifproxy,
        headers: getHeader
    }
    try {
        response = await rp(config);
        return (response);
    }
    catch (error) {
        console.log(error)
        return false;
    }
}

async function lookNumber(number,token,ifproxy) {
    if (!ifproxy) ifproxy = ''
    var getHeader = {
        'Content-Type': 'application/json',
        'Content-Length':'0',
         'authorization': token
    };

    var config = {
        method:'GET',
        uri: 'https://www.bitrefill.com/api/widget/lookup_number?number=' + number,
        resolveWithFullResponse: true,
        strictSSL: true,
        proxy: ifproxy,
        headers: getHeader
    }
    try {
        response = await rp(config);
        return (response);
    }
    catch (error) {
        console.log(error)
        return false;
    }
}