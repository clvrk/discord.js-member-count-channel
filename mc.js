const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')
const { prefix } = config;

client.on('ready', () => {
    let myGuild = client.guild.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
    console.log('Member Count Has Loaded.');
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guild.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guild.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
});

client.login(config.token)