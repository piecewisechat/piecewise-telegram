import logo from "../logo";

export default Blockly => {
    return {
        block: {
            "type": "telegram_event_message",
            "message0": "%1 🔔 message",
            "args0": [
                {
                    "type": "field_image",
                    "src": logo,
                    "width": 15,
                    "height": 15,
                    "alt": "Telegram",
                    "flipRtl": false
                }
            ],
            "output": "telegram_message",
            "colour": 165,
            "tooltip": "The message this event was created in response to.",
            "helpUrl": "#autohelp",
            "category": "Telegram",
            "reservedWords": [ "msg" ],
            "onlyValidInside": "telegram_command",
            "doc_output": "The message this event was created in response to."
        },
        generator: () => {
            return [`msg`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}