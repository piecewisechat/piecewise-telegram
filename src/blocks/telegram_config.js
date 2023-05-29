import logo from "../logo";
import clazz from "../service";

export default Blockly => {
    return {
        block: {
            "type": "telegram_config",
            "message0": "%1 log in with token %2",
            "args0": [
                {
                    "type": "field_image",
                    "src": logo,
                    "width": 15,
                    "height": 15,
                    "alt": "Telegram",
                    "flipRtl": false
                },
                {
                    "type": "field_input",
                    "name": "token",
                    "text": "token",
                    "required": true,
                    "doc_description": "The token for your Telegram bot. Send a message to t.me/BotFather to get it."
                }
            ],
            "colour": 165,
            "tooltip": "Log in with Telegram",
            "category": "Telegram",
            "helpUrl": "#autohelp"
        },
        generator: block => {
            Blockly.JavaScript.provideFunction_("Telegram", clazz.split("\n"));

            return `
                config.telegram = {};
                config.telegram.token = "${block.getFieldValue('token')}";
            `;
        }
    }
};