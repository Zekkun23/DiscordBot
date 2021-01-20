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
                "name": "Code Labs",
                "value": "https://spaces.zang.io/spaces/5fcc775aa58f471d36d4b0ac"
              },
              {
                "name": "Digital Storytelling",
                "value": "https://spaces.zang.io/spaces/5fcc9f7dd02ed5df4a5eabbc"
              },
              {
                "name": "Computing Fundamentals (DCC)",
                "value": "https://spaces.zang.io/spaces/5fcc8b5f37c084c8514dbc4d\nhttps://meet.google.com/riz-sarp-hwy"
              },
              {
                "name": "Fundamentals Of Computing (BSC)",
                "value": "https://spaces.zang.io/spaces/5fd0627a67ad5052464024d3"
              }
            ]
          };
          message.channel.send({ embed });      
    }}
