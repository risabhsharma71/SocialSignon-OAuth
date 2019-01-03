// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1746020002170372', // your App ID
        'clientSecret'    : '6c603017c12e477855047d460108cb9f', // your App Secret
       'callbackURL':"https://risabh-oauth.herokuapp.com/facebook-auth/facebook/redirect",
        // 'callbackURL'     : 'http://localhost:3000/facebook-auth/facebook/redirect',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'twitterAuth' : {
        'consumerKey'        : 'RndABqMlAnNaOPx783MHZ5vyi',
        'consumerSecret'     : 'u71Se3fvn8doD8gnoBnmr6ccuR933OveF1q5ILiVqdzvVfyoWi',
        'callbackURL'        : 'https://risabh-oauth.herokuapp.com/twitter-auth/twitter/redirect',
        //'callbackURL'        : 'http://localhost:3000/twitter-auth/twitter/redirect'
    },

    'googleAuth' : {
        'clientID'         : '42857291352-8mldm58kjt85nnm8d9lrpil5oqlbf9e2.apps.googleusercontent.com',
        'clientSecret'     : 'xXFlsSMlxhxzlgI6K41dIKnj',
    //    'callbackURL'      : 'http://localhost:3000/google-auth/google/redirect',
        'callbackURL'        : 'https://risabh-oauth.herokuapp.com/google-auth/google/redirect'
    },

      'linkedinAuth':{
        'consumerKey'        : '81v7i8w8a51i6p',
        'consumerSecret'     : 'wmva72Zfz54RS817',
        'callbackURL'        : 'https://risabh-oauth.herokuapp.com/linkedin-auth/linkedin/redirect',
        //'callbackURL'        : 'http://localhost:3000/linkdein-auth/linkedin/redirect'
     },
     'stocktwits':{
        "clientID": 'e299d0970f83c8ce',
        "clientSecret": '66ea05b6657b1b84d008ac0d74e8c975c8be683a',
        "callbackURL": 'https://risabh-oauth.herokuapp.com/stocktwits-auth/stocktwits/redirect',
     }


};
