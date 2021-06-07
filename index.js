const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs')
const pre = '-';
client.commands = new discord.Collection();
const cmdfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of cmdfiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command)
}
client.once('ready',()=>{
    console.log("Hello");
})
client.on('message',message=>{
    if(!message.content.startsWith(pre) || message.author.bot)return;
    const args = message.content.slice(pre.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    console.log(message.content);
    if(message.content.length == 5)
    message.channel.send("Enta maraya message haaka");
    else{
    if(cmd === 'ping'){
        client.commands.get('itslike').execute(message,args);
    }
}
})
client.login('ODUxMzYxNzc2NzI0NjA3MDM2.YL3KcQ.eRJU1p-z4XNGXmJxowIjF6rNZaw')