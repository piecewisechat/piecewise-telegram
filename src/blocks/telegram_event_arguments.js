import logo from "../logo";

export default Blockly => {
    return {
        block: {
            "type": "telegram_event_arguments",
            "message0": "%1 🔔 arguments",
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
            "output": "Array",
            "colour": 165,
            "tooltip": "The arguments of the command that was executed.",
            "helpUrl": "#autohelp",
            "category": "Telegram",
            "reservedWords": [ "msg" ],
            "onlyValidInside": "telegram_command",
            "doc_output": "The arguments of the command that was executed."
        },
        generator: () => {
            return [`msg.text.split(" ").slice(1)`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}