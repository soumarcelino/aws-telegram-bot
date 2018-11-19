const spawn = require('child_process').exec

const settings = {
    "invocationMessage" : "/cmd",
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
        🤖 I can run commands
       `
       this.bot.sendMessage(this.id,welcomeMessage)
       const cmd = this.text.split("/cmd")[1].trim()
       spawn(cmd, (err, stdout) => {
            if (err) {
                return console.error('exec error:', err);
            }
            this.bot.sendMessage(this.id,stdout);
        });
       
    }
    
}

module.exports = {init,settings}