const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Sas Bot`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/899388887439409240/902826276723777566/standard.gif"
    )
    .setDescription(
      `🎧  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `💬 \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `⚙️  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma(Bakımda)__`,
      `🔰 \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar(Bakımda)__`,
      `⚙️ \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `🌀 \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutlar(Bakımda)__`,
      ` 🎮 \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Çekiliş Komutlar__`,
      `🎉 \`${prefix}çekiliş\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `🎏 \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `🎲 \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | Sas Bot  İletişim Bilgileri.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
