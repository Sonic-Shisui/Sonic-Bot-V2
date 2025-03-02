module.exports = {
  config: {
    name: "uptime",
    aliases: ["upt", "up"],
    version: "1.0",
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡", // don't change credits 
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const uptime = process.uptime();
      
      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `\n│🎶✨${days} 𝐝𝐚𝐲𝐬✨🎶\n│🎶✨${hours} 𝐡𝐨𝐮𝐫𝐬✨🎶\n│🎶✨${minutes} 𝐦𝐢𝐧𝐮𝐭𝐞𝐬✨🎶\n│🎶✨${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝𝐬✨🎶`;
      
      api.sendMessage(`╭─⌾🌿𝗛𝗘𝗗𝗚𝗘𝗛𝗢𝗚🌿\n│𝐍𝐚𝐦𝐞:➣ ✘.𝚂𝙾𝙽𝙸𝙲〈 な\n│𝐏𝐫𝐞𝐟𝐢𝐱 𝐒𝐲𝐬𝐭𝐞𝐦: ~\n│𝐎𝐰𝐧𝐞𝐫:ミ𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄彡\n╰─────────⌾\n╭─⌾⏰𝗨𝗣𝗧𝗜𝗠𝗘⏰ ${uptimeString}\n╰─────────⌾\n╭─⌾🟢𝗖𝗔𝗣𝗔𝗖𝗜𝗧𝗬🟢\n│𝐒𝐩𝐞𝐞𝐝📶: 327.99ko/s\n│𝐒𝐭𝐨𝐜𝐤𝐚𝐠𝐞💽: 512Go\n│𝐑𝐀𝐌💾: 64Go\n│✅| 𝐆𝐨𝐨𝐝 𝐒𝐲𝐬𝐭𝐞𝐦\n╰────────⌾`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
