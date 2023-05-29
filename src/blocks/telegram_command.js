import logo from "../logo";

export default Blockly => {
    return {
        block: {
            "type": "telegram_command",
            "message0": "%1 when command / %2 executed %3 %4",
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
                    "type": "field_input",
                    "name": "command",
                    "text": "command",
                    "required": true,
                    "doc_description": "The command to listen for"
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
            "tooltip": "Run blocks when a command is executed.",
            "helpUrl": "#autohelp",
            "category": "Telegram",
            "restrictedWords": [ "msg", "chan" ],
            "require": "telegram_config"
        },
        generator: block => {
            return `lazurite.on("telegram_start", async () => {
                lazurite.telegram.bot.command("${block.getFieldValue("command")}", async ctx => {
                    let msg = ctx.message;
                    let chan = ctx.chat;
                    ${Blockly.JavaScript.statementToCode(block, 'statements')}
                });
            });`;
        }
    }
}