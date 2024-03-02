const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, ''): '254700143167';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail_Md:Suhail_Md@cluster1.0tlyzhm.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'silvatech06@gmail.com' ;
global.github = 'https://github.com/Sylivanu/SILVA-M' ;
global.location = 'NAIROBI KENYA' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Nairobi'
global.gurl = 'https://youtube.com/' ; // add your username
global.sudo =  process.env.SUDO || "254700143167" ;
global.devs = "254700143167"; //Dont change it From here
global.website = 'https://github.com/Sylivanu/SILVA-M' ; //wa.me/254700143167
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3647aeca79bcc25555c99.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || '',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || '𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋`,
  author:  process.env.PACK_AUTHER || '𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋', 
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋𓃮 \n\n..💋\n\n.👁️🙈\n\n...♥️\n\n\n   - 🚮 \n\n--- 𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋---" ,
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Nh4iTxEH5k3vmHugFqoYktGM",
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || '𝐒𝚰𝐋𝛁𝚫 𝚻𝚵𝐂𝚮💋',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
