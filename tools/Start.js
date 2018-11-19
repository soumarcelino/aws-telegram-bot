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
        🤖 Hi, I'm a super bot, now i can run 
        /start  - View this message
        /update - Update the bot
        /cmd    - run a command
       `
       this.bot.sendMessage(this.id,welcomeMessage)
       
    }
    
}

module.exports = {init,settings}