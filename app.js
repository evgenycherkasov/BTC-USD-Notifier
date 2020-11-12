const Bot = require("./bot");
const getLastPrice = require("./broker");

async function main() {
    const token = "697411347:AAG357lyRBGhTQqOkyHCoalzyrszYTPAskA";
    let bot = new Bot(token);
    bot.startBot()
    let lastPrice = await getLastPrice()
    while (true) {
        let currentPrice = await getLastPrice()
        if (currentPrice - lastPrice <= -5) {
            bot.sendMessage("Ставим на понижение");
        }
        if (currentPrice - lastPrice >= 5) {
            bot.sendMessage("Ставим на повышение");
        }
        lastPrice = currentPrice;
    }
};

main();