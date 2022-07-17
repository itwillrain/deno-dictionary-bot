import { App } from "./deps.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

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
