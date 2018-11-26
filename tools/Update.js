const spawn = require('child_process').exec

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
       
       const cmd = "git pull && git --no-pager log --decorate=short --pretty=oneline -n1"
       spawn(cmd, (err, stdout) => {
            if (err) {
                return this.bot.sendMessage(this.id,`Error: ${err}`)
            }
            this.bot.sendMessage(this.id,stdout);
            if(stdout.indexOf("Already up to date") === -1){
                this.bot.sendMessage(this.id,"Rebooting....")
                setTimeout(()=>{
                   process.exit(0)
                },2000)
            }
            
        });
       
    }

}

module.exports = {init,settings}