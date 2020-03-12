const botconfig = require("./botconfig.json");
const fs = require("fs")
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => 
{
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Přiřazuji role"); 
})

bot.on("message", async message => 
{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let author = message.member

    if(cmd === `${prefix}addrole`)
    {
        switch(args[0]){
            case "1a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "2a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "3a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "4a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "5a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "5.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "6a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "6.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "7a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "7.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "8a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "8.A"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "1b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.B"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "2b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.B"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "3b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.B"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "4b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.B"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "1c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.C"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "2c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.C"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "3c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.C"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            case "4c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.C"){
                        role = message.guild.roles.cache.array()[x]
                    }

                }
                if(!author.roles.member._roles.includes(role.id)){
                    await author.roles.add(role.id)
                    message.channel.send("Role úspěšně přidána!")
                } else{
                    message.channel.send("Tuto roli už máš!")
                }
                break
            default:
                message.channel.send("Taková třída neexistuje!")
        }

    }
    if(cmd === `${prefix}removerole`){
        switch(args[0]){
            case "1a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
                break
            case "2a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
                break
            case "3a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
                break
            case "4a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
                break
            case "5a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "5.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "6a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "6.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "7a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "7.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "8a":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "8.A"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "1b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.B"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "2b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.B"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "3b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.B"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "4b":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.B"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "1c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "1.C"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "2c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "2.C"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "3c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "3.C"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            case "4c":
                for (let x = 0; x< message.guild.roles.cache.array().length;x++) {
                    if(message.guild.roles.cache.array()[x].name == "4.C"){
                        role = message.guild.roles.cache.array()[x]
                    }
        
                }
                if(author.roles.member._roles.includes(role.id)){
                    await author.roles.remove(role.id)
                    message.channel.send("Role úspěšně odebrána!")
                } else{
                    message.channel.send("Takovou roli nemáš!")
                }
                break
            default:
                message.channel.send("Taková třída neexistuje!")
        }
        
    }
});

bot.on("guildMemberAdd", async member => {
    fs.readFile("onJoinString.txt", "utf8", (err, data) => {
        if(err) console.log(err)
        member.send(data)
    })
})

bot.login(botconfig.token);