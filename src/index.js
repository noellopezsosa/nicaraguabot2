import { Telegraf } from "telegraf";

const bot = new Telegraf("1561777257:AAHy-CmO7WIRjyerZQjm5qgNOVf6K6fwNJ8");

bot.start((ctx) => {
  return ctx.reply("Hola");
});

bot.help((ctx) => {
  ctx.reply("Que puedes hacer?: \n /start\n /help");
});

bot.on("sticker", (ctx) => {
  ctx.reply("Bonito sticker!");
});

bot.launch();
