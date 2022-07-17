import { App, env } from "./deps.ts";
const app = new App({
  signingSecret: env.get("SLACK_SIGNING_SECRET"),
  token: env.get("SLACK_BOT_TOKEN"),
  ignoreSelf: true,
});

app.event("app_home_opened", async ({ event, say }) => {
  await say(`Hello world, <@${event.user}>!`);
});

await app.start({ port: 3000 });
console.log("🦕 ⚡️Bolt app is running!");
