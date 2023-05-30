import logo from "../logo";

export default Blockly => {
    return {
        block: {
            "type": "telegram_event_channel",
            "message0": "%1 🔔 chat",
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
            "output": "telegram_channel",
            "colour": 165,
            "tooltip": "The channel this event was created in response to.",
            "helpUrl": "#autohelp",
            "category": "Telegram",
            "reservedWords": [ "chan" ],
            "onlyValidInside": "telegram_command",
            "doc_output": "The channel this event was created in response to."
        },
        generator: () => {
            return [`chan`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}