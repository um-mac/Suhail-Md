const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/um-mac";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923156593022";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_59_03_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0xtZ2wxNnhaK05YcU5LS3RoVW1qeDlQSUZtRy9JQVZ2alJYcWUrMisxUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImMrREc3K0NXUnhUYy85Wmd1RVZvNTZyZGhsOFN4VW8xM2YrcHVCdnlqUlE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNENaSU95TXVYZE82YXRGMml2TU11eFRsZkMwdGkvenl4VXlSYTBncEQyTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm9Dd3hHUlRQenAxTW9TZXJKUWRTZVpVM1JyZFNzVjlGZ3Y5bUp0MTBMa1k9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0I2Qk5pYXJZTis4aVd1azZ1MzVUeExpVHk0aVZYd0x4T3Q2T2JmeVhVcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5xdjlEZ05vaUV5dk4yeTc0QlJUUlB3cXpWTVlqdUEzU2srVStpSVRPUzg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPRVV3ZzNxVWFhMFpGU0g3QTFRVGtaNWFZRy9nRmJWazlrSzFmYlpoSlU0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVlh1VVl0eFl0TWMrNzRXTzltS2lvSG1PSy9DOWtKV0s1ZGNuY2RnWDNqND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJQZ25nQjB2S2d5eXZkWk5Wa3Y1UzQ0ZzhVcks2ZG5tZWJsalB6QW5WMEhWMjNRWUJjMGR2a3cyU3o2UWVIR0RvZW0wTlcrM3NMNHdKUitkYlNQQmFEQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjIwLFwiYWR2U2VjcmV0S2V5XCI6XCJZdWtFd3p3TVIwS1paRlVXTlZkUnlSM0lYZ1ZjMDFCQnd2cE9yeVJvYmQwPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMTU2NTkzMDIyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjRCM0NERTFBMzBEOTlCM0E5QjVGRjMyMDg0ODg3MTk4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEwNTgzNTR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ6MEdEMHNCWlQ4ZUR1c3UtMmFmcHRBXCIsXCJwaG9uZUlkXCI6XCJhNGNhNTFkOC1mMjE2LTQyNTYtYjlhNS1hMzMyYWU1NGQ5ZjlcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVNZnFlTGh1Y3VMOWluNU5ISktKZ05MR3lxaz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVFNwb0kyM2NYaDM3MHVWa3JCa1YrSk1scDFrPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNMcnp0SkFFRUtyYjhxOEdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwib0FnNFNnZzUvRFdJa3c2MXcxMVZqcFMxazdPY21jNzJRRHdOeUhIalVDWT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIm5ZdndFUm1EYlozLzlEQVR6dnpsT3FMSEcvTVBISERNRnJndUhiTk1xMUVzVVRWSDhLVzVVYW5qb2wyTVB3TytvK0p0VjdERFJlaUhNU1BHZDVKVURBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiR1hISGFOVDJhSHFoTktrOHRVK0FpOEh5cGRFUVRCV21FM0pTMXN3WHByK3JTUnpRUXZ5bjh3QlU0aGNpM09GdzBxdVU5MituUkVGR0Z3OXJ6RWx6Q3c9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjkyMzE1NjU5MzAyMjo5QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCLwnZCSyorMvcmVzKDEscyD8J2XscmZzL3JvlxcblxcbuKTqlxcblxcbuKRolxcblxcbuKRoFxcblxcbuKRpFxcblxcbuKRpVxcblxcbuKRpFxcblxcbuKRqFxcblxcbuKRolxcblxcbuKTqlxcblxcbuKRoVxcblxcbuKRoVwiLFwibGlkXCI6XCIyMTE0MDE4MTQwMTY1Nzo5QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkyMzE1NjU5MzAyMjo5QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmFBSU9Fb0lPZncxaUpNT3RjTmRWWTZVdFpPem5Kbk85a0E4RGNoeDQxQW1cIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExMDU4MzUwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUhyb1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhyby5qc29uIjogIntcImtleURhdGFcIjpcIlBZckVjcFY3dGtYS3pjb013azlVNnRRellVTkZEWEtMRjg1TFBkcUNBN0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwODE2MzAwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEwNzc3NTIxNTIyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Reiik",
  ownername:process.env.OWNER_NAME|| "um-mac",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
