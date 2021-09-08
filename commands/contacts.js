module.exports = {
    name: 'contacts',
    description: 'Provides contact Details',
    execute(message, args){
        const embed = {
            "description": "Teacher Contact Details",
            "color": 65438,
            "footer": {
              "icon_url": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            },
            "thumbnail": {
              "url": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            },
            "author": {
              "name": "Contact Details",
              "icon_url": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            },
            "fields": [
              {
                "name": "__**Mr. Abdul Basit - Smartphone Apps:**__",
                "value": "Number: +971 56 871 1320 | E-mail: abdul@bathspa.ae"
              },
              {
                "name": "__**Ms. Anmol - Games Development:**__",
                "value": "Number: +971 52 939 4259 | E-mail: anmol@bathspa.ae"
              },
              {
                "name": "__**Ms. Arshiya - Code Lab II:**__",
                "value": "Number: +971 52 667 2450 | E-mail: arshiya@bathspa.ae"
              }
            ]
          };
          message.channel.send({ embed });
    }
}
