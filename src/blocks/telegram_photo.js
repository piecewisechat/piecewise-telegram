import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_photo",
            "message0": "%1 photo from location %2",
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
                    "doc_description": "The local file location or URL to pull the photo from."
                }
            ],
            "output": "telegram_photo",
            "colour": 165,
            "tooltip": "Pull a photo from a URL or local file location to attach to a message.",
            "helpUrl": "#autohelp",
            "requires": "telegram_config",
            "category": "Telegram",
            "blockXml": `<block type="telegram_photo">
    <value name="location">
        <shadow type="text">
            <field name="TEXT"></field>
        </shadow>
    </value>
</block>`
        },
        generator: block => {
            return [`{photo: ${Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC)}}`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}