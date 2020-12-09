const {MessageEmbed} = require('discord.js')
module.exports={
    name: "pw",
    description: "announce passwords",
    run: async(bot,message,args)=>{
        let rChannel = message.guild.channels.cache.her(args[0])
        if(!rChannel)return message.channel.send(`Please specify the channel!`)
        console.log(rChannel)
        let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
        if(!MSG)return message.channel.send(`Please specify the password!`)
        const _ = new MessageEmbed()
        .setTitle(`Password!`)
        .setDescription(`${MSG}`)
        .setColor('RANDOM')
        rChannel.send(_)
        message.delete()
    }
}