module.exports = {
    name: 'schedule',
    description: 'Provides class schedule',
    execute(message, args){
        const embed = {
            "color": 1315897,
            "footer": {
              "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "thumbnail": {
              "url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "author": {
              "name": "Class Schedule",
              "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "fields": [
              {
                "name": "__**Saturday**__",
                "value": "[Code Lab II]() [9:30 - 11:30]"
              },
              {
                "name": "__**Sunday**__",
                "value": "[Games Development](https://meet.google.com/nkd-nczg-wuk) [9:30 - 11:30]\n\n[Smartphone Apps]() [12:00 - 2:00]"
              },
              {
                "name": "__**Monday-Thurs:**__",
                "value": "[Games Development](https://meet.google.com/nkd-nczg-wuk) [10:30 - 11:00]\n\n[Smartphone Apps](https://meet.google.com/mif-dtdr-rwg) [11:15 - 12:15]\n\n[Code Lab II]()[12:30 - 1:30]"
              }
            ]
          };
          message.channel.send({ embed });
    }
}
