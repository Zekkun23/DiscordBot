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
                "name": "__**Saturday:**__",
                "value": "[Emerging Tech](https://meet.google.com/wuo-cvqs-hty)[9:30 - 11:00]"
              },
                {
                "name": "__**Monday:**__",
                "value": "[Creative Ind](https://meet.google.com/yiq-pjvr-mqb)[9:30 - 11:00]\n\n[Responsive Web](https://meet.google.com/yry-uaqm-vfr)[11:30 - 1:00]"
              },
                {
                "name": "__**Wed-Thurs**__",
                "value": "[Responsive Web](https://meet.google.com/yry-uaqm-vfr)[9:30 - 11:00]\n\n[Creative Ind](https://meet.google.com/yiq-pjvr-mqb)[11:30 - 1:00]\n\n[Emerging Tech](https://meet.google.com/wuo-cvqs-hty)[1:00 - 2:30]"
              },
            ]
          };
          message.channel.send({ embed });
    }
}
