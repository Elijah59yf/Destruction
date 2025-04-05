require("./lib/module")

// SETTING KONTAK
global.owner = "2348105696265"
global.ownername = "M0rn@ch D3m!"
global.nomorbot = "2348105696265"
global.namaCreator = "𝚞𝚗𝚔𝚗𝚘𝚠𝚗"
global.Dec = "𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://cdn.elxyzgpt.xyz/file/SYIGr5seSt.png'
global.channel = 'https://whatsapp.com/channel/0029Varp77h1XquP9IhiyV3B'

// STICKER
global.packname = "𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢"
global.author = "𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝚘𝚗𝚕𝚢 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚄𝚜𝚎𝚛𝚜*`
global.onlyown = `\`[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝚘𝚗𝚕𝚢 𝚏𝚘𝚛 𝙾𝚠𝚗𝚎𝚛*`
global.onlygroup = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝙾𝚗𝚕𝚢 𝚒𝚗 𝚐𝚛𝚘𝚞𝚙𝚜*`
global.onlyadmin = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝚘𝚗𝚕𝚢 𝚏𝚘𝚛 𝙰𝚍𝚖𝚒𝚗 𝚄𝚜𝚎𝚛*`
global.notext = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝚗𝚘 𝚝𝚎𝚡𝚝? *`
global.noadmin = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]\` \n*𝚋𝚘𝚝 𝙽𝚘𝚝 𝚢𝚎𝚝 𝙰𝚍𝚖𝚒𝚗*`
global.succes = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝚜𝚞𝚌𝚌𝚎𝚜𝚜!!*`
global.invalid = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶]\` \n*𝙽𝚞𝚖𝚋𝚎𝚛 𝚒𝚜 𝚒𝚗𝚟𝚊𝚕𝚒𝚍*`
global.bugrespon = `\`[✰𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷. 𝟶]\` \n*𝙱𝚄𝙶𝚂 𝙰𝚁𝙴 𝙱𝙴𝙸𝙽𝙶 𝚂𝙴𝙽𝚃😈*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})