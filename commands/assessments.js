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
 "title": "Hypertext Story",
              "description": "Create an interactive non-linear Hypertext story using HTML and CSS",
              "color": 11461089,
              "fields": [
                {
                  "name": "»———— [March 11] ————«",
                  "value": ">> [Click for full details](https://drive.google.com/file/d/1zk704Ierq3SlOVVVIbNss7wK1zYieJi2/view?usp=sharing) <<\n⠀"
                },
                {
                  "name": "__Requirements__:",
                  "value": "- Must be made with HTML5 and CSS\n- Use of JavaScript is **optional**\n- Must be a non-linear story\n- Must **not exceed** 20 pages\n- Must have <audio> and <img> tags\n- Must include User Instructions on the first page\n⠀",
                  "inline": true
                },
                {
                  "name": "__Deliverables__:",
                  "value": "1. **Google Drive link** containing your HTML and CSS files + all assets (images, audio, video, etc) used\n2. **Development Document** - min. 1,000 words, no max. words. Go crazy if you want.\n→ Brief (50 words)\n→ Story (100 words)\n→ Non-linearity (150 words)\n→ Technical Description (400 words)\n→ Critical Reflection (300 words)\n⠀",
                  "inline": true
                },
                {
                  "name": ":warning: __How to Submit__:",
                  "value": "1. In your Google Drive folder: click `Share` → click `Get Shareable Link` → copy the URL\n2. Paste the URL in the assessment cover sheet provided on\nMinerva/Study Lab under CodeLab I → Assessment → Hypertext Story.\n3. Your cover sheet must be the first page of your Development Document\n4. Save your document (with cover sheet) as a Word file or PDF.\n5. Log into Minerva/Study Lab → go to `Assessment` → `Hypertext Story` →\nsubmit via the Turnitin link."
                }
              ],
              "author": {
                "name": "Web Development/Web Programming",
                "icon_url": "https://media.discordapp.net/attachments/748134959788851271/810434611884457994/1.png"
              }
            },
           
            {
              "description": "»———— **[TBA]** ————«",
              "color": 13885660,
              "fields": [
                {
                  "name": "No details yet",
                  "value": "[Click for cat](https://preview.redd.it/tyciywgee3521.jpg?width=960&crop=smart&auto=webp&s=3d1e3a50ddca713d9019445357cff444b829c7f2)"
                }
              ],
              "author": {
                "name": "Ideation and CPS/Creative Strategies",
                "icon_url": "https://media.discordapp.net/attachments/748134959788851271/810434613901525042/2.png"
              }
            }, 
            
            {
              "title": "Design Portfolio",
              "description": "Create a Microsoft Sway portfolio that includes the following artifacts with supporting written posts",
              "color": 16568785,
              "fields": [
                {
                  "name": "»———— **[June 3?]** ————«",
                  "value": ">> [Click for full details](https://docs.google.com/document/d/1Mr4IzmhcIAbAg4Qm9jGAT8-I7wM51-WwoatD3rA4PQI/edit) <<\n⠀"
                },
                {
                  "name": "__Artifact List__:",
                  "value": "1)\t*App Title*\n2)\t*Problem Definition & Background*\n3)\t*Target Audience & Scope*\n4)\t*Initial Considerations*\n5)\t*Final Solution*\n6)\t*Market Research*\n7)\t*Audience Research*\n8)\t*User Persona*\n9) *User Journey Map*\n10)\t*Storyboard*\n11) *Wireframes*\n12)\t*Low Fidelity Prototype*\n13)\t*User Testing & Feedback*\n⠀",
                  "inline": true
                },
                {
                  "name": "__Deliverables__:",
                  "value": "1. **Sway Portfolio** with:\n→ Introductory post\n→ Artifacts 1-15\n→ Critical reflection (250 words)\n2. **Google Drive folder** with:\n→ All manual/digital developments\n→ User Persona (image)\n→ User Journey Map\n→ App artworks\n→ 4-5 screenshots of final app\n→ Walkthrough video\n⠀",
                  "inline": true
                },
                {
                  "name": ":warning: __How to Submit__:",
                  "value": "1. In your final Sway Portfolio: click `...` in top-right corner → click `Export` → click `Word`\n2. Open the Word export, include the following in the first page:\n• Your name, registration #, module & program\n• Link to your online Sway Portfolio\n• Link to your Google Drive\n3. Log into Minerva/Study Lab → go to `Assessment` → `Design Portfolio` →\nsubmit via the Turnitin link."
                }
              ],
              "author": {
                "name": "Experience Design/UX Design",
                "icon_url": "https://media.discordapp.net/attachments/748134959788851271/810434610634817546/3.png"
              }
            ]
          };
message.channel.send({ embed });
  }
}
