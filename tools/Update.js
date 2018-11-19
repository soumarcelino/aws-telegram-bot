const utils = require("./../utils")

const settings = {
    "invocationMessage" : "/update",
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
        🤖 Update Tool has been invoked
       `
       this.bot.sendMessage(this.id,welcomeMessage)
       this.bot.sendMessage(this.id,"Updating....")
       this.runUpdate()
       this.bot.sendMessage(this.id,"Rebooting....")
       this.bot.sendMessage(this.id," 🕒 10s ")
       setTimeout(function(){
            console.log("bye")
            process.exit(0)
       },10000)
       
       
    }

    runUpdate(){
        utils.git.pull()
    }
    
}

module.exports = {init,settings}