module.exports = {
  name: 'assessments',
  description: 'Provides assessment Details',
  execute(message, args){
const embed = {
  "description": " ",
  "color": 1447749,
  "footer": {},
  "author": {
    "name": "Assessments",
    "url": "https://discordapp.com",
    "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
  },
  "thumbnail": {
    "url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
  },
  "fields": [
    {
      "name": "Experience Design/UX Design",
      "value": "**N/A**"
    },
    {
      "name": "Web Development/Web Programming",
      "value": "**N/A**"
    },
    {
      "name": "Ideation And CPS/Creative Strategies",
      "value": "**N/A**"
    }
  ]
};
message.channel.send({ embed });
  }
}
