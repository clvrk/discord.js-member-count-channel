const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

client.login(config.token)

client.on('ready', () => {
    let myGuild = client.guilds.cache.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.cache.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.cache.get('725196941050380348');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('737792403146014911');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

