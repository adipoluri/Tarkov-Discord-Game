<<<<<<< HEAD
var mysql = require('mysql');
const Discord = require('discord.js')
var players  = [];

//Establish connection with temporary data of all players in raid
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"password",
        database: "Players"
    });

    module.exports.BeginRaid = () =>{
        con.query("Select * from PlayersInRaid", function (err, result){
            if (err) throw err;
            for(var i=0; i < result.length; i++){
                players.push(result[i].UserID)
                console.log(players)
               // for(var x = 0; x < players[x].length; x++){
              //      rollencounter(players[x].UserID)
              //  }
            }
        })
    }
=======
//ALL MOVED INTO RAID.JS

// var mysql = require('mysql');
// const Discord = require('discord.js')
// var raid = require('../Main');
// var players  = [];
// //Establish connection with temporary data of all players in raid
//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password:"password",
//         database: "PlayersInRaid"
//     });
>>>>>>> 6f9e1e28a47c7fb657bd4bbc442a2d57ff77705e

//     module.exports.BeginRaid = () =>{
//         con.query("Select * from Players", function (err, result){
//             if (err) throw err;
//             for(var i=0; i < result.length; i++){
//                 players.push(result[i].UserID)
//                 console.log(players)
//                 for(var x = 0; x < players.length; x++){
//                     rollencounter(players.UserID)
//                 }
//             }
//         })
//     }

// var rollencounter = function(){
//     const roll = new Discord.MessageEmbed()
//     .setColor('#0099ff')
//     .setTitle('Roll for Encounter')
//     .setThumbnail('https://cdnb.artstation.com/p/assets/images/images/018/042/671/large/hayo-sena-00.jpg?1558240182')
//     raid.client.channels.cache.get('747021523814055936').send('hi');
// }
