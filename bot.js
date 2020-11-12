const Telegraf = require("telegraf").Telegraf;

module.exports = class TelegramBot {
    constructor(token) {
        this.bot = new Telegraf(token);
        this.chatId = 427323008
    }

    sendMessage(message) {
        this.bot.telegram.sendMessage(this.chatId, message)
    }

    startBot() {
        this.bot.launch()
        this.sendMessage("Бот начал работу");
    }

    stopBot() {
        this.bot.stop();
    }
}