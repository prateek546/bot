import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import testSchema from './test.schema'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', async () => {
    console.log('online')

    //  await mongoose.connect( process.env.MONGO_URL || '', {
    //    keepAlive: true
    // })


    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '964485435340492800',
        mongoUri: process.env.MONGO_URL,
        
        
    })

    setTimeout(async () => {
        await new testSchema({
            message: 'hello world'
        }).save()
    }, 1000)

    const guildId = '964485435340492800'
    const guild = client.guilds.cache.get(guildId)


    let commands

    if (guild) {
      commands = guild.commands
    } else {
        commands = client.application?.commands
    }

   
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

   
    
})

const guildId = '964485435340492800'
const guild = client.guilds.cache.get(guildId)



    


client.login(process.env.TOKEN)
