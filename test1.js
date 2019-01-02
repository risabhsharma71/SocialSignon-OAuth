const facebook=require("./test")
var access='EAAYzZCvYABgQBAAVOx5nKUCz5h6KqOImkyvDSieG9YNwYsMNnmGXbmvjTx9XsjsfZBvedYkPZAS6Wm6HZCZAPC25YWZCEMQIeRikuIyk2liM5v5DJC79Ul6DqCmbijsSNSqMEm4KvLZAs8LKaeH3qZBKdhLXYQehS9Fmwq7g6ZCZALZCQZDZD'
facebook.getFbData(access , 'me/friends', function(data){
    console.log(data);
});