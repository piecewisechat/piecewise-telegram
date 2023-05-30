import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_send",
            "message0": "%1 send message to %2 with %3",
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
                    "type": "input_value",
                    "name": "target",
                    "required": true,
                    "doc_description": "The target of the message. Specifying a message will send the message as a reply to the specified message.",
                    "check": [
                        "telegram_message",
                        "telegram_channel"
                    ]
                },
                {
                    "type": "input_value",
                    "name": "content",
                    "required": true,
                    "doc_description": "The content to send. Specifying a message here will forward it to the target channel.",
                    "check": [
                        "String",
                        "telegram_photo",
                        "telegram_sticker",
                        "telegram_message"
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 165,
            "tooltip": "Run a command when a command is executed.",
            "helpUrl": "#autohelp",
            "require": "telegram_config",
            "category": "Telegram",
            "restrictedWords": [ "target", "content" ]
        },
        generator: block => {
            return `await lazurite.telegram.sendMessageTo(${Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC)}, ${Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC)});`;
        }
    }
}