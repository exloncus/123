const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Sas Bot  | Ticket Sistem`)
    .setTitle(``)
   .setImage(
      "https://cdn.discordapp.com/attachments/899388887439409240/902826276723777566/standard.gif"
    )
    .setColor(`#ee7621`)
     .setThumbnail(
      "https://cdn.discordapp.com/attachments/899388887439409240/902826276723777566/standard.gif"
    )
    .setDescription(
      `🎫 Sas Bot Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `🎫  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `🎫  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `🎫  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `🎫  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` 🎫 \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` 🎫  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎯  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎯 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🎯 \`${prefix}iletişim\` | Sas Bot İletişim Bilgileri.`
    );
  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-sistem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticket-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
 