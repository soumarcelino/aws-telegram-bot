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
        **🤖 Hi, I'm a super bot, now i can run**
        
           **/start**  - __View this message__
           **/update** - __Update the bot__
           **/cmd [ command ]** - __Run some no interactive command__
           **/deploy [ ssh addr ]** - __Deploy git project__
       
       `
       this.bot.sendMessage(this.id,welcomeMessage,{ parse_mode: 'Markdown' })
       
    }
    
}

module.exports = {init,settings}