const utils = require("./../utils")

const settings = {
    "invocationMessage" : "/start",
    "allowedUsers" : ["soumarcelino"]
}

class init {
    constructor(bot,text,id,username){
        this.bot = bot
        this.text = text
        this.id = id
        this.username = username        
    }

    run() {
       const welcomeMessage = `
        🤖 Hi, I'm a super bot, now i can run /update
       `
       this.bot.sendMessage(this.id,welcomeMessage)
       
    }
    
}

module.exports = {init,settings}