const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

client.login(config.token)

client.on('ready', () => {
    let myGuild = client.guilds.cache.get(''); // your server id goes here.
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get(''); // your channel id goes here.
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberJoin', member => {
    let myGuild = client.guilds.cache.get(''); // your server id goes here.
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('737792403146014911'); // your channel id goes here.
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.cache.get(''); // your server token goes here.
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get(''); // your channel id goes here.
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

