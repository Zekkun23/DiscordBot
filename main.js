const Discord = require('discord.js');

const client = new Discord.Client();

const exampleEmbed = new Discord.MessageEmbed() 

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

const prefix = ';';

const fs = require('fs');
const schedule = require('./commands/schedule');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'play') {
    let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
    message.channel.send(`Currently playing ${track.name}! - Requested by ${track.requestedBy}`);
  }

  if (command === 'stop') {
    let track = await bot.player.stop(message.guild.id);
    message.channel.send(`STOPPED`);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'links'){
    client.commands.get('links').execute(message, args);
  } 
  else if (command == 'contacts'){
    client.commands.get('contacts').execute(message, args);
  }
  else if (command == 'schedule'){
    client.commands.get('schedule').execute(message, args);
  }
  else if (command == 'help'){
    client.commands.get('help').execute(message, args);
  }
});


client.login(process.env.TOKEN);