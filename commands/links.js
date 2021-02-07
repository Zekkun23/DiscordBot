module.exports = {
    name: 'links',
    description: 'Provides class links',
    execute(message, args){
        const embed = {
            "description": "Links For The Classes",
            "color": 13632027,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "thumbnail": {
              "url": "https://image.winudf.com/v2/image1/Y29tLmF2YXlhLnNwYWNlc19pY29uXzE1OTQ5NzM3NDdfMDE4/icon.png?w=170&fakeurl=1"
            },
            "author": {
              "name": "Class Links",
              "icon_url": "https://image.winudf.com/v2/image1/Y29tLmF2YXlhLnNwYWNlc19pY29uXzE1OTQ5NzM3NDdfMDE4/icon.png?w=170&fakeurl=1"
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
