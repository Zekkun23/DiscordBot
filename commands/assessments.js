module.exports = {
  name: 'assessments',
  description: 'Provides assessment Details',
  execute(message, args){
const embed = {
  "description": "Assessment Details (Credits to nella for compiling these.) ",
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
      "name": ":floppy_disk: Code Lab I",
      "value": "**[JAN 26] - Utility App**\nWord Document\n1,000 words min.\n• Source code file\n• Lots of explanation\n• System flowchart\n• (optional) pseudocode\n**[OPTIONAL]** Explanatory Video\n• 3-5 mins length\n• Screen-recorded vid going through your vending machine app\n• Explain the code and methods you used\n• Not graded, but it's practice for upcoming years when we have to do this often\n• Best works are uploaded on BSU UAE Official YT channel\n\n:paperclip:  Details: https://drive.google.com/file/d/10jD24R21-7v25DSBc8p7xU83yqZVrQqH/view?usp=sharing\n\n"
    },
    {
      "name": ":desktop: (BSc) Intro to Computing",
      "value": "**N/A**"
    },
    {
      "name": ":desktop: (DCC) Fundamentals of Computing",
      "value": "**[JAN 24] - Research Project: Word Document**\n2,000 words min.\n\n:paperclip:  Details: https://portal.ftcglobal.ae/pluginfile.php/14532/mod_resource/content/0/SA%204%20brief%20Research%20Project.pdf"
    },
    {
      "name": ":book: Digital Storytelling",
      "value": "**[JAN 30] - Sway Portfolio: Finished Sway Link **\n+ Word Document with essay that must include:\n• Digistory Experience (Video)\n• Twine story\n• 30-sec timelapse\n• Photoshop - selective coloration/decoloration, image blend and coloration\n• Advertisement storyboard\n• Photography works\n• Stop Motion\n• Bitsy Game\n\n:paperclip:  Details: https://docs.google.com/document/d/1ph0hcKs3oEWy9k13C3tcXtspLJMqs2UXF_AUd4codsg/edit\n:paperclip:  Sample: https://sway.office.com/DGdGGsAvgZY5uJwa?ref=Link\n"
    }
  ]
};
message.channel.send({ embed });
  }
}
