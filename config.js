const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mongodbural:mongodbural@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94766943622'
global.devs = '94766943622';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09YNVhUZUQ4cGZvZVkxVFhlYkkvdVg3cFlVTm56cnFJQzBiYnNhcWQyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXVNWU1MUElRcmVOQ0E0RlZBNDRXNkV0VXllRlpLMHNDR0s1QlhoK3p5ND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQ0hnMDhKOVhndXgwUThLWFJ3ZllJZ2F5U283Nkc2Vk5RRStWT0gxZzNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QXY3M3FDc3d4Z3QxdG1ocnVmSGVtTEJPYzcxSjlCb3VwNU5jZlg5V1VVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HbzZjbzY1RVNLeU1BK0FFQjUzTVY5ZEZGaDRybnQxcHRqL0ZFM0ZsbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc5bTZsYi9WVmNmaEUyYTlhSmRPcE9LNk9MTk5wNFh3RTQyTXBmeEdLVjg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dXVseHRGdnJnQzgySElqTFFldGxDTjNRNHF6T1BBQXg3NzByeTlEYmsyOWwxRmkzZklXWlgyb21ub3c0dHgvNlpzOFhiallYMWhoZ0Nham44alVnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjUsImFkdlNlY3JldEtleSI6Ijc5cjJiUXdPdjhOamxqNElIeUJpK3Fsb0NPaVNGVk9wK1puTHZMUXp3Unc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTI5MzYxMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODZCQzE0M0JFQzA3RjFBN0QyODAxNzY0N0FBOTNDQUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMDA2NjA2OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTI5MzYxMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkMyMEYwMEUxNzlFMkUyNUIxMDE5NzdFREUyNDJGQzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMDA2NjA3MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTI5MzYxMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTc4ODFBMzAzQ0IxRTY0MTlFNjdDNEUzODFDOEQwQUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMDA2NjA3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV0RKVHpPVXBTSy15Szd3RFlxSGhKdyIsInBob25lSWQiOiI4YThjZWM1Mi1mMzRjLTRlZTItYTlkNS1iMDBiNjZlMzJhZjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVZGdFNlVFF2cFM5cnc5WXFGUHNxNWNXcTlVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMc1ZnVkczM1JWYVJYa3pIVWEvRFh3UXNnVTA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM2QzN3dCRUpIbTA2b0dHQVE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpESHVXYm1rd2FONXA4VGcrWkZVK3Z4Qmp0TVdhQ1lIRzI0VTlPSGl3eFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRUNlBYY2wrRXRVVStOS2pycEdSSmsxNHRBbVJKT1AzaGVkc256R3pvRGc5TDNTS3J1Q1hUVVFuRGFJZEpoVDh4YzlJSG44ZXkySFZkckJpTzA5NEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyWmlLb0JMWSt2WVJHYmsyRGVtUVprWTlteEMzYUF3MURvQ0ovQzZCUktpSndUR1pESnBIN3VyNHhBZU1SeVRGZGg3WUY1YTVCT1JSQTdJOTFSaVppQT09In0sIm1lIjp7ImlkIjoiOTQ3NTI5MzYxMjI6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUZiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MjkzNjEyMjo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN3eDdsbTVwTUdqZWFmRTRQbVJWUHI4UVk3VEZtZ21CeHR1RlBUaDRzTVcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDAwNjYwNjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2RlIn0=
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'true' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
