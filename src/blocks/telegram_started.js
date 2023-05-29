import logo from "../logo";

export default Blockly => {
    return {
        block: {
            "type": "telegram_started",
            "message0": "%1 when I am ready %2 %3",
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
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statements",
                    "required": true,
                    "doc_description": "The statements to execute"
                }
            ],
            "colour": 165,
            "tooltip": "Run blocks when the bot is ready.",
            "helpUrl": "#autohelp",
            "category": "Telegram",
            "require": "telegram_config"
        },
        generator: block => {
            return `lazurite.on("telegram_start", async msg => {
                ${Blockly.JavaScript.statementToCode(block, 'statements')}
            });`;
        }
    }
}