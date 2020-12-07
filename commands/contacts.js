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
                "name": "__**Dr. Brohi - Intro To Computing:**__",
                "value": "Number: +971 422 9890 | E-mail: mnbrohi@bathspa.ae"
              },
              {
                "name": "__**Ms. Anmol Zubair - Computing Fundamentals**__",
                "value": "Number: +971 52 939 4259 | E-mail: anmol@bathspa.ae"
              },
              {
                "name": "__**Mr. Iftikhar A Khan - Digital Media & Storytelling:**__",
                "value": "Number: +971 50 866 1786 | E-mail: info@bathspa.ae"
              },
              {
                "name": "__**Ms. Arshiya - Code Lab I:**__",
                "value": "Number: +971 52 667 2450 | E-mail: arshiya@bathspa.ae"
              }
            ]
          };
          message.channel.send({ embed });
    }
}