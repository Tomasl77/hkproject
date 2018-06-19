const discord = require('discord.js');

const bot = new discord.Client();

	bot.on('ready', function(){
		bot.user.setActivity('hello Kitty Online').catch(console.error);
	})

/*	bot.on('guildMemberAdd', function(mem){
		mem.send('Bienvenue a toi '+ mem.displayName);
	});
*/

var prout = "443707253741191168"
 bot.on('guildMemberAdd', function(member) {
  if(member.guild.channels.exists("id", prout)){
    member.guild.channels.find("id", prout).send('Salut a toi, '+member.displayName+', de la mafia.')
  }
}); 

	bot.on('message', function(msg){
		if (msg.content === 'Chaton'){
			msg.reply('I <3 Cats')
		}
	})

bot.on("ready", () => {
    bot.guilds.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
         setInterval (function () {
              defaultChannel.send("@everyone Trop mignon !!!") //send it to whatever channel the bot has permissions to send on
         }, 1 * 120000);
   })
})



bot.login('NDU4NTQzMzgyMTY0Mjc1MjEx.DgpLig.hAIjKHNpnn1hmE_4DgXErtD429w');