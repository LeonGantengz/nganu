let cap = `Join Group Bot untuk info ter-update

• *Telegram Channel* : Gaada
• *WhatsApp Group 1* : https://tinyurl.com/ya4dpmdv
• *WhatsApp Group 2* : https://chat.whatsapp.com/GaRWLEYSSQO8Vof0uHOrGp
`
const buttonsDefault = [
    { urlButton: { displayText: `🛎 Telegram  Bot`, url: `https://t.me/tikdl_bot` } },
    { urlButton: { displayText: `💈 Instagram`, url: 'https://www.instagram.com/leonvx._' } },
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}