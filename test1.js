const facebook=require("./test")
var access='EAAYzZCvYABgQBAPz1OgKZBMFbt7QDZBWImKBsZCXjzc8eNtneMwzfrgZBFgRo1wiVK3rexEqZC2Cj66hBd6BHmsjuWXvs6GavmeNcsLG7XFSar9wTwEUgXfZAzxrjPw1zs5UaSlwLYtLGZBnZABLWg9lmZBF2FDdJWB11KeRZCnAIAoHwZDZD'
facebook.getFbData(access , '/me', function(data){
    console.log(data);
});