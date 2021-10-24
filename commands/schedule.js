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
                "value": "[Code Lab II](https://meet.google.com/wqq-jwmg-jrt) [9:30 - 11:00]"
              },
              {
                "name": "__**Sunday**__",
                "value": "[Games Development (CCO5100-20)](https://meet.google.com/nkd-nczg-wuk) [9:30 - 11:00]\n\n[Smartphone Apps](https://meet.google.com/rwe-bmvh-ipq) [11:30 - 1:00]"
              },
              {
                "name": "__**Monday-Thurs:**__",
                "value": "[Games Development (CCO5100-20)](https://meet.google.com/nkd-nczg-wuk) [9:30 - 11:00]\n\n[Smartphone Apps](https://meet.google.com/rwe-bmvh-ipq) [11:00 - 12:30]\n\n[Code Lab II](https://meet.google.com/wqq-jwmg-jrt)[1:00 - 2:30]"
              }
            ]
          };
          message.channel.send({ embed });
    }
}
