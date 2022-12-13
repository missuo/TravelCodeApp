/*
 * @Author: Vincent Young
 * @Date: 2022-12-14 01:49:49
 * @LastEditors: Vincent Young
 * @LastEditTime: 2022-12-14 01:53:55
 * @FilePath: /TravelCodeApp/travel-code.js
 * @Telegram: https://t.me/missuo
 * 
 * Copyright © 2022 by Vincent, All Rights Reserved. 
 */
/*
[rewrite_local]
# > Shanghai Healthy Code PCR Permanently Valid
^https:\/\/xc\.caict\.ac\.cn:8088\/appLocation\/query_v2 url script-response-body https://script.nisekoo.com/travel-code.js

[mitm] 
hostname = xc.caict.ac.cn
*/


// Receive Origin Response
var objc = JSON.parse($response.body);


// Only Display Shanghai
objc.result.message = "Q/VYttNmBAyKAXcDHgdIDaO8b6HhNj0L6rebgABN8LxcYFBm6tMSlw9oB2ecCQ6YPB1exFBN1QbKarIPInU0jaimHrbIHL6SAx44AlqoUtXWlBtgcAAqcONqq7xmHlzZNlG25JSXNKVdkRVXUppGL5sI2bxaNBlDGuVvLGraTDk=";

let body = JSON.stringify(objc)

// Send Fake Response
$done({
    body
});