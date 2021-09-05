module.exports = {
    name: 'links',
    description: 'Provides class links',
    execute(message, args){
        const embed = {
            "description": "Links For The Classes",
            "color": 3066993,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "thumbnail": {
              "url": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Meet.max-1100x1100.png"
            },
            "author": {
              "name": "Class Links",
              "icon_url": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Meet.max-1100x1100.png"
            },
            "fields": [
              {
                "name": "Games Development (CCO5100-20)",
                "value": "https://meet.google.com/nkd-nczg-wuk"
              },
              {
                "name": "Code Lab II",
                "value": "https://meet.google.com/wqq-jwmg-jrt"
              },
              {
                "name": "Smartphone Apps",
                "value": "https://meet.google.com/rwe-bmvh-ipq" 
              }
            ]
          };
          message.channel.send({ embed });      
    }}
