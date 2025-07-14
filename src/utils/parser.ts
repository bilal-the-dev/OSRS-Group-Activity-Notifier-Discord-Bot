import { SkillMilestoneEntry } from "../typings/types.js";

export const createActivtyEmbed = (activity: SkillMilestoneEntry) => {
  const { Username, Skill, Xp, Date: activityDate, Type } = activity;

  const timestamp = Math.floor(new Date(activityDate).getTime() / 1000); // UNIX in seconds
  const readableTime = `<t:${timestamp}:f>`; // Full timestamp (e.g. "Jul 14, 2025 3:34 PM")

  let restStr = "";

  if (Skill.toLowerCase() === "ehp") {
    restStr = `EHP`;
  } else if (Type === "Pvm") {
    restStr = `${Skill} kills!`;
  } else {
    restStr = `XP in ${Skill}!`;
  }

  return {
    description: `${Username} reached ${Xp.toLocaleString()} ${restStr}\n\n${readableTime}`,
    color: 0x00ff66,
  };
};
export const createErrorEmbed = (error: Error) => {
  return {
    title: "⚠️ Scraper Error",
    description: `\`\`\`${error.message}\`\`\``,
    color: 0xff0000,
  };
};
