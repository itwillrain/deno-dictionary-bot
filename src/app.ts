import { config } from "https://deno.land/std@0.148.0/dotenv/mod.ts";
import { App } from "https://deno.land/x/slack_bolt@1.0.0/mod.ts";

console.log(await config());

const app = new App({
  signingSecret: Deno.env.get("SLACK_SIGNING_SECRET"),
  token: Deno.env.get("SLACK_BOT_TOKEN"),
  ignoreSelf: true,
});

app.event("app_home_opened", async ({ event, say }) => {
  await say(`Hello world, <@${event.user}>!`);
});

await app.start({ port: 3000 });
console.log("🦕 ⚡️Bolt app is running!");
