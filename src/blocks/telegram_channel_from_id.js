import logo from "../logo"

export default Blockly => {
    return {
        block: {
            "type": "telegram_channel_from_id",
            "message0": "%1 chat from ID %2",
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
                    "name": "id",
                    "required": true,
                    "doc_description": "The chat to find.",
                    "check": "Number"
                }
            ],
            "output": "telegram_channel",
            "colour": 165,
            "tooltip": "Find a chat by ID.",
            "helpUrl": "#autohelp",
            "requires": "telegram_config",
            "category": "Telegram",
            "blockXml": `<block type="telegram_channel_from_id">
    <value name="id">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>`
        },
        generator: block => {
            return [`await lazurite.telegram.bot.telegram.getChat(${Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC)})`, Blockly.JavaScript.ORDER_NONE];
        }
    }
}