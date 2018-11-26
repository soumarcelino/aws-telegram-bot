class Gateway {
    constructor(modules){
        this.modules = modules
    }

    moduleTranscender (text,username) {
        let modules = []
        this.modules.forEach(module => {
            if(text.indexOf(module.settings.invocationMessage) === 0 && (module.settings.allowedUsers.indexOf(username) > -1)) {
                modules.push(module)
            }
        });
        return modules
    }

    newEntry(text,id,username){
        const modules = this.moduleTranscender(text,username)
        if( modules.length === 0 ) this.bot.sendMessage(id,'❌ Invalid command\nType /start to list all commands🙆‍♂️')
        modules.forEach(module => {
            let md = new module.init(this.bot,text,id,username)
            md.run()
        });
    }

    setBot (bot) {
        this.bot = bot
    }
}

module.exports = Gateway