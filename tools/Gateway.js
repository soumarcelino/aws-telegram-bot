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

    entry(text,id,username){
        const modules = this.moduleTranscender(text,username)
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