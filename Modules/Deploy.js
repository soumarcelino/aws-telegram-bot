const spawn = require('child_process').exec

const settings = {
    "invocationMessage" : "/deploy",
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
        🤖 I can Deploy projects
       `
       this.bot.sendMessage(this.id,welcomeMessage)
       const project = this.text.split("/deploy")[1].trim()
       const cmd = `git clone ${project} ~/`
       spawn(cmd, (err, stdout) => {
            if (err) {
                return this.bot.sendMessage(this.id,`Error: ${err}`)
            }
            this.bot.sendMessage(this.id,stdout)
        });
       
    }
    
}

module.exports = {init,settings}