const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('la sécurité de ton serveur',{type: 'WATCHING'})
});

client.login(process.env.TOKEN);



client.on("message" , message => {
    if(message.content === "*aie"){
        message.reply("```{@#5807}   et {@#4389}   un probléme est détécté```");
        console.log("Un probléme a mener a la mention des patrons")
    }
});

client.on("message" , message => {
    if(message.content === "*help"){
        msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
      title: 'LES COMMANDES',
      description: 'VOICI QUELQUES COMMANDES',
      fields: [
        {
          name: "*help",
          value: "pour savoir les commandes"
          
       
        }
      ],
      timestamp: new Date(),
      footer:{
        text: ''
      }
   
            
})
client.on("message" , message => {
    if(message.content === "*blacklist"){
        message.reply(" ```Voici les gens possédant des idées noire:``` @.......#0000 ; @.......#0000 ....");
        console.log("Blacklist demandé")
    }
});

client.on("message" , message => {
    if(message.content === "*securise"){
        message.reply("```Le mode securité est bientôt disponible, en attendant, fais : *aie```");
        console.log("Mode securité demander")
    }
});

client.on("message" , message => {
    if(message.content === "Wsh"){
        message.reply("```Je n'aime pas la façons dont tu parle ! [Attention]```");
        console.log("Un utilisateur à dis WESH, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Tg"){
        message.reply("```[WARNING] On ne parle pas comme sa à ces camarades DISCORD !```");
        console.log("Un utilisateur à dis TAGEULE, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Slt"){
        message.reply("```Bonjour, mes créateurs sont oOTeamCocOo et Advisor Discord Defender, je suis déstiné à apporter la protection de tous !```");
        console.log("un utilisateur à dis salut")
    }
});

client.on("message" , message => {
    if(message.content === "Hey"){
        message.reply("```Bonjour, mes créateurs sont oOTeamCocOo et Advisor Discord Defender, je suis déstiné à apporter la protection de tous !```");
        console.log("Un utilisateur à dis Hey")
    }
});

client.on("message" , message => {
    if(message.content === "*invite"){
        message.reply("```Tu as envie de rejoindre le discord defender ? Et bien voici la clé:```https://discordapp.com/api/oauth2/authorize?client_id=530121084910174231&permissions=0&scope=bot   ");
        console.log("Un utilisateur à demander la clé")
    }
});

client.on("message" , message => {
    if(message.content === "*info"){
        message.reply("```Bonjour, aujourd'hui, les principales informations de discord sont : compte spotify premium pour seulement 1€50 dans la boutique à coco```");
        console.log("Un utilisateur à demander l'info")
    }
});


