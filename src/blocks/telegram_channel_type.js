import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_channel_type",
            "message0": "%1 chat %2 is a %3 chat",
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
                    "name": "channel",
                    "required": true,
                    "doc_description": "The chat to determine the type of.",
                    "check": "telegram_channel"
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "private/direct",
                            "private"
                        ],
                        [
                            "private group",
                            "group"
                        ],
                        [
                            "public group",
                            "supergroup"
                        ]
                    ],
                    "required": true,
                    "doc_description": "The type to check."
                }
            ],
            "output": "Boolean",
            "colour": 165,
            "tooltip": "Determine the type of a chat.",
            "helpUrl": "#autohelp",
            "requires": "telegram_config",
            "category": "Telegram",
            "restrictedWords": [ "ch", "type" ]
        },
        generator: block => {
            return [`await (async () => {
    let ch = (${Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC)});
    let type = "${block.getFieldValue("type")}";
    if( type === "private" && ch.type === "private" ) return true;
    if( type === "group" && (ch.type == "group" || (ch.type === "supergroup" && ! ch.username))) return true;
    if( type === "supergroup" && ch.username ) return true;

    return false;
})()`, Blockly.JavaScript.ORDER_NONE ];
        }
    }
}