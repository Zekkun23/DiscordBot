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
                "name": "__**Monday:**__",
                "value": "[Creative Ind.](https://meet.google.com/yiq-pjvr-mqb)[9:30 - 11:00]\n\n[Responsive Web](https://meet.google.com/yry-uaqm-vfr)[11:30 - 1:00]"
              },
                {
                "name": "__**Tuesday:**__",
                "value": "[Emerging Tech (No Link)][9:30 - 11:00]\n\n[Responsive Web](https://meet.google.com/yry-uaqm-vfr)[11:30 - 1:00]"
              },
                {
                "name": "__**Monday:**__",
                "value": "[Creative Ind](https://meet.google.com/yiq-pjvr-mqb)[9:30 - 11:00]\n\n[Emerging Tech (No Link)][11:30 - 1:00]"
              }
            ]
          };
          message.channel.send({ embed });
    }
}
