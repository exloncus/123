const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`   | Ban Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/899388887439409240/902826276723777566/standard.gif"
    )
    .setDescription(
      `📛 Sas Bot  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ban__**`,
      `🔒 \`${prefix}ban\` \n Discord Sunucundan Bir Kişiyi Banlarsın.`,
        true
    )
     .addField(
      `**__Ban Log__**`,
      `🔒 \`${prefix}ban-log\` \n Discord Sunucunda Bir Ban Log Kanalı Ayarlarsın.`,
        true
    )
     .addField(
      `**__Ban Log__**`,
      `🔒 \`${prefix}ban-yetkili\` \n Discord Sunucunda Bir Ban Yetkili Rölü Ayarlarsın.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📌 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 📌 \`${prefix}iletişim\` | Sas Bot  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"ban-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
