let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Iyan
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : 20
│ ✎ _Asal_ : Jawa Barat 
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    https://saweria.co/IyanMd
│ ✎ _Official Grup 2_ :
│    https://saweria.co/IyanMd
│ ✎ _Youtube _:
│    https://saweria.co/IyanMd
│ ✎ _Instagram_ : 
│    https://saweria.co/IyanMd
│ ✎ _WhatsApp_ :
│    wa.me/6289516947204
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
