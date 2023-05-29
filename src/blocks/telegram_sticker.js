import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_sticker",
            "message0": "%1 sticker from location %2",
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
                    "name": "location",
                    "required": true,
                    "doc_description": "The local file location or URL to pull the sticker from."
                }
            ],
            "output": "telegram_sticker",
            "colour": 165,
            "tooltip": "Pull a sticker from a URL or local file location to attach to a message.",
            "helpUrl": "#autohelp",
            "requires": "telegram_config",
            "category": "Telegram",
            "blockXml": `<block type="telegram_sticker">
    <value name="location">
        <shadow type="text">
            <field name="TEXT"></field>
        </shadow>
    </value>
</block>`
        },
        generator: block => {
            return [`{sticker: ${Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC)}}`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}