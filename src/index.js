import telegram_channel_from_id from "./blocks/telegram_channel_from_id";
import telegram_channel_properties from "./blocks/telegram_channel_properties";
import telegram_channel_type from "./blocks/telegram_channel_type";
import telegram_command from "./blocks/telegram_command";
import telegram_config from "./blocks/telegram_config";
import telegram_event_arguments from "./blocks/telegram_event_arguments";
import telegram_event_channel from "./blocks/telegram_event_channel";
import telegram_event_message from "./blocks/telegram_event_message";
import telegram_photo from "./blocks/telegram_photo";
import telegram_send from "./blocks/telegram_send";
import telegram_started from "./blocks/telegram_started";
import telegram_sticker from "./blocks/telegram_sticker";

export default class TelegramPlugin extends LazuritePlugin {
    constructor(){
        super();

        this.addBotDependency("telegraf@4.12.2");

        this.addBlock(telegram_config(Blockly));
        this.addBlock(telegram_command(Blockly));
        this.addBlock(telegram_started(Blockly));
        this.addBlock(telegram_send(Blockly));
        this.addBlock(telegram_event_message(Blockly));
        this.addBlock(telegram_event_channel(Blockly));
        this.addBlock(telegram_event_arguments(Blockly));
        this.addBlock(telegram_photo(Blockly));
        this.addBlock(telegram_sticker(Blockly));
        this.addBlock(telegram_channel_from_id(Blockly));
        this.addBlock(telegram_channel_properties(Blockly));
        this.addBlock(telegram_channel_type(Blockly));
    }
}