import { CronJob } from "cron";
import { fetchAndProcessActivity } from "./utils/scraper.js";

await fetchAndProcessActivity();

CronJob.from({
  cronTime: "0 * * * * *",
  onTick: fetchAndProcessActivity,
  start: true,
});
