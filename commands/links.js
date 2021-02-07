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
                "name": "Experience Design/UX Design",
                "value": "https://meet.google.com/rrd-dmcf-xxu"
              },
              {
                "name": "Web Development/Web Programming",
                "value": "https://meet.google.com/hoz-wsae-xwn"
              },
              {
                "name": "Ideation And CPS/Creative Strategies",
                "value": "???"
              }
            ]
          };
          message.channel.send({ embed });      
    }}
