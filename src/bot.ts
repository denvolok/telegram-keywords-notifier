import { Bot, InlineKeyboard } from "grammy";
import { ENV } from "./utils/env/env";

export const getBot = () => {
  const bot = new Bot(ENV.BOT_TOKEN);

  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

  const kb = new InlineKeyboard().url("Click me!", "https://example.com");
  bot.on("message", (ctx) => {
    ctx.reply("Got another message!", {
      reply_markup: kb,
    });
  });

  return bot;
};
