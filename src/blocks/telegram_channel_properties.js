import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_channel_properties",
            "message0": "%1 %2 of chat %3",
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
                    "type": "field_dropdown",
                    "name": "property",
                    "options": [
                        [
                            "ID",
                            "id"
                        ],
                        [
                            "name",
                            "name"
                        ],
                        [
                            "vanity link",
                            "username"
                        ]
                    ],
                    "required": true,
                    "doc_description": "The property to get."
                },
                {
                    "type": "input_value",
                    "name": "channel",
                    "required": true,
                    "doc_description": "The chat to get properties of.",
                    "check": "telegram_channel"
                }
            ],
            "output": [
                "String",
                "Number"
            ],
            "colour": 165,
            "tooltip": "Get properties of a chat.",
            "helpUrl": "#autohelp",
            "requires": "telegram_config",
            "category": "Telegram",
            "restrictedWords": [ "ch" ]
        },
        generator: block => {
            if( block.getFieldValue("property") != "name" ){
                return [`(${Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC)})["${block.getFieldValue("property")}"] || ""`, Blockly.JavaScript.ORDER_NONE];
            } else {
                return [`await (async () => {
                    let ch = (${Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC)});

                    if( ch["type"] == "private" ){
                        return ch.first_name + (ch.last_name ? (" " + ch.last_name) : "");
                    } else {
                        return ch.title;
                    }
                })()`, Blockly.JavaScript.ORDER_NONE]
            }
        }
    }
}