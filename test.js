// const request =require('request')
// request.get({
//     url: 'https://www.google.com/m8/feeds/contacts/default/full',
//     headers: {
//         'Authorization': 'Bearerya29.Gl9_BiATQbD-XvpSV-TfxN2kYx1l7-M_fFRYA9MGnPPM9nN735g2CNybjOgnU4PBRKDRKNeV5f_poJC7B6ax1Nrgxk9r8JhV9s0fMwatTdtVeUZuUSML8LE9sanneTHojg',
//         'Content-Type': 'application/json'
//     },//Optional to get limit, max results etc
//     method: 'GET'
//     }, function (err, response, body) {
//        console.log(body)

//    });
// var googleContacts = require('google-contacts-oauth');
 
// var opts = {
//   token: 'ya29.Gl9_BiATQbD-XvpSV-TfxN2kYx1l7-M_fFRYA9MGnPPM9nN735g2CNybjOgnU4PBRKDRKNeV5f_poJC7B6ax1Nrgxk9r8JhV9s0fMwatTdtVeUZuUSML8LE9sanneTHojg'
// };
// googleContacts(opts, function(err, data){
//   console.log(data);
// });
var https = require('https');
exports.getFbData = function(accessToken, apiPath, callback) {
    var options = {
        host: 'graph.facebook.com',
        port: 443,
        path: apiPath+ '?access_token=' + accessToken, //apiPath example: 
        method: 'GET'
    };
    console.log(options)

    var buffer = ''; //this buffer will be populated with the chunks of the data received from facebook
    var request = https.get(options, function(result){
        result.setEncoding('utf8');
        result.on('data', function(chunk){
            buffer += chunk;
        });

        result.on('end', function(){
            callback(buffer);
        });
    });

    request.on('error', function(e){
        console.log('error from facebook.getFbData: ' + e.message)
    });

    request.end();
}
