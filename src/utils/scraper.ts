import { SkillMilestoneEntry } from "../typings/types.js";
import customFetch from "./fetch.js";
import { createActivtyContent, createErrorEmbed } from "./parser.js";
import { sendToDiscord } from "./send.js";

const cachedActivites: Array<SkillMilestoneEntry> = [];

export const fetchAndProcessActivity = async (): Promise<void> => {
  try {
    console.log("Starting to fetch!");

    const { data } = await customFetch({ path: `/group_achievements.php?id=` });

    console.log(`Fetched ${data.length} activities!`);

    if (
      process.env.NODE_ENV !== "development" && // if development, it wont add to cache
      !cachedActivites.length
    ) {
      console.log("First time adding in cache!");
      cachedActivites.push(...data);
      return;
    }

    const cachedStrings = new Set(
      cachedActivites.map((a) => JSON.stringify(a))
    ); // for faster lookup i guess

    const newActivites = data.filter((newActivity) => {
      const isNew = !cachedStrings.has(JSON.stringify(newActivity));

      return isNew;
    });

    console.log(`Fetched ${newActivites.length} new activities!`);

    for (const newActivity of newActivites) {
      newActivity.Xp = 4800000000;
      const content = createActivtyContent(newActivity);
      await sendToDiscord({ content });
      cachedActivites.push(newActivity); // add in cache after processing
    }
  } catch (error) {
    // some error occured, while fetching or parsing the html or anything
    // we'll send logs on discord

    if (error instanceof Error) {
      const embed = createErrorEmbed(error);
      await sendToDiscord({ embeds: [embed] });
    }
  }
};
