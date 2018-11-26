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
        <h3>🤖 Hi, I'm a super bot, now i can run</h3>
        <p>
           <b>/start</b>  - <i>View this message</i>
           <b>/update</b> - <i>Update the bot</i>
           <b>/cmd [ command ]</b> - <i>Run some no interactive command</i>
           <b>/deploy [ ssh addr ]</b> - <i>Deploy git project</i>
        </p>
       `
       this.bot.sendMessage(this.id,welcomeMessage,{ parse_mode: 'html' })
       
    }
    
}

module.exports = {init,settings}