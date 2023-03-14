const { joinVoiceChannel } = require('@discordjs/voice');
const { Client } = require('discord.js-selfbot-v13')
const fs = require("fs")
const colors = require("colors")
const { IDVC , MT , DT} =  require("./config.json")
const random = ["idle","dnd","online"]
// ALL Copyright By </SmSm>#8700
let count = 0;
async function  AccountOnline(token) {
const client = new Client({
	checkUpdate: false,
  patchVoice: true,
});

client.on('ready', async () => {
count++;
const status = random[Math.floor(Math.random()*random.length)]
client.user.setStatus(status)
console.log(`${client.user.username} ${count}st is Ready!`.green);
const voiceChannel = client.channels.cache.get(IDVC);
    if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
      return console.log(`token line ${count} Unable find or Join Voice`.yellow);
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
selfMute: MT,
selfDeaf: DT
    });

    console.log(`${client.user.tag} Joined Voice ${voiceChannel.name}!`.blue)
  });
 count++; 


client.login(token).catch(() => {
  console.log(`token line ${count} is invaild`.red)
})
}

const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n').filter(Boolean)

for(const token of tokens) {
AccountOnline(token)
}
/// ALL Copyright By SmSm
/// Don't Forget Star 🌟 Project For Supporting Me
