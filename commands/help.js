module.exports = {
    name: 'help',
    description: 'Provides Detailed Information on The Commands',
    execute(message, args){
        const embed = {
            "description": "This Provides Help on Bot Commands. Bot Prefix is ;",
            "color": 6118749,
            "footer": {
              "text": "Made by Zeggy :)"
            },
            "thumbnail": {
              "url": "https://cdn2.iconfinder.com/data/icons/warning-solid-icons-1/48/34-512.png"
            },
            "author": {
              "name": "Help",
              "icon_url": "https://cdn2.iconfinder.com/data/icons/warning-solid-icons-1/48/34-512.png"
            },
            "fields": [
              {
                "name": "Schedule",
                "value": "This shows the class schedules."
              },
              {
                "name": "Links",
                "value": "This Shows all class links."
              },
              {
                "name": "Contacts",
                "value": "Provides all of the teachers contacts and emails."
              },
              {
                "name": "Assessments",
                "value": "Provides Upcoming Assessment Details"
              },
              {
                "name": "Assessment-ping",
                "value": "Don't use this command if ur not an admin/class rep. Im gonna kill you if you do."
              },
              {
                "name": "Help",
                "value": "Shows what all the commands do."
              }
            ]
          };
          message.channel.send({ embed });
    }
}