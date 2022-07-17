import "https://deno.land/x/dotenv@v2.0.0/load.ts";
import { App } from "https://deno.land/x/slack_bolt@1.0.0/mod.ts";

const app = new App({
  signingSecret: Deno.env.get("SLACK_SIGNING_SECRET"),
  token: Deno.env.get("SLACK_BOT_TOKEN"),
  ignoreSelf: true,
});

app.event("app_home_opened", async ({ event, say }) => {
  await say(`Hello world, <@${event.user}>!`);
});

app.message("", async ({}) => {});

await app.start({ port: 3000 });
console.log("🦕 ⚡️Bolt app is running!");
