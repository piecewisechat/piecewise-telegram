export default `
    const { Telegraf } = require("telegraf");

    class Telegram extends Service {
        constructor(lazurite, config){
            super(lazurite, config);

            this.bot = new Telegraf(config.token);
        }

        start(){
            this.bot.launch();

            this.lazurite.emit("telegram_start");
        }

        stop(){
            this.bot.stop("SIGINT");
        }

        async sendMessageTo(target, content){
            let tgt;
            let addl = {};

            lazurite.log(JSON.stringify(target));

            if( target.message_id ){ // probably a message?
                tgt = target.chat.id;
                addl = { replyToMessage: target.message_id };
            } else if( target.type ){ // probably a channel?
                tgt = target.id;
            } else {
                throw new Exception("not yet implemented");
            }

            if( typeof content === 'string' ){
                await this.bot.telegram.sendMessage(tgt, content, addl);
            } else if( content.message_id ){
                await this.bot.telegram.forwardMessage(tgt, content.chat.id, content.message_id, addl);
            } else if( content.photo ) {
                if( ! content.photo.startsWith("http://") && ! content.photo.startsWith("https://") ){
                    content.photo = { source: content.photo };
                }

                await this.bot.telegram.sendPhoto(tgt, content.photo, addl);
            } else if( content.sticker ){
                if( ! content.sticker.startsWith("http://") && ! content.sticker.startsWith("https://") ){
                    content.sticker = { source: content.sticker };
                }

                await this.bot.telegram.sendSticker(tgt, content.sticker, addl);
            } else {
                throw new Exception("not yet implemented");
            }
        }
    }

    services["telegram"] = Telegram;
`;