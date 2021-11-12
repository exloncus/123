const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(` Davet Menü`)
    .setDescription(
      `**💼 Botun Davet Linki [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n\n**💼 Botun Destek Discordu [TIKLA](https://discord.gg/9mm968TWGQ)**`
    )
    .addField(
      `__Bilgilendirme__`,
      `🔰  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔰 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔰 \`${prefix}iletişim\` | Sas Bot İletişim Bilgileri.`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/899388887439409240/902826276723777566/standard.gif"
    );

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
