const Discord = require('discord.js');

const client = new Discord.Client();

const exampleEmbed = new Discord.MessageEmbed() 

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

client.user.setActivity('students suffer', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  
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
  else if (command == 'assessments'){
    client.commands.get('assessments').execute(message, args);
   }
  if (command == 'assessment-ping'){
    message.channel.send('<@&754608365283442738> Just a reminder to do your assessments! Details are above this message. See <#758394341030101042> for the full list, or use the assessment command.');
  } 
  if (command == 'pw'){
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const user = message.author;
    
    let msg;
    let textChannel = message.mentions.channel.first()
    if (!args[0]) {
      message.channel.send("Please Provide the Password.")
      }

      const say = args.join(" ");
textChannel.send(say)
message.delete()

}});

client.login(process.env.TOKEN);
