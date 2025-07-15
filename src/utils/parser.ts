import { SkillMilestoneEntry } from "../typings/types.js";
import skillEmojisJson from "../../emojis.json" with { type: "json" };

const untypedEmojiJSON: Record<string, string> = skillEmojisJson;

export const createActivtyContent = (activity: SkillMilestoneEntry): string => {
  const { Username, Skill, Xp, Type } = activity;

  const skillKey = Skill.toLowerCase();
  let emoji = untypedEmojiJSON[skillKey] ?? "";

  let restStr = "";

  if (skillKey === "ehp") {
    restStr = "EHP";
  } else if (Type === "Pvm") {
    restStr = `${Skill} kills!`;
  } else {
    restStr = `XP in ${Skill}!`;
  }

  let content = `${Username} reached ${Xp.toLocaleString()} ${restStr}`;

  const isPVM = Type === "Pvm";

  if (!isPVM) {
    let isCrownEmoji = Xp === 200_000_000 && skillKey !== "overall";

    if (
      skillKey === "overall" &&
      (Xp === 4_600_000_000 || Xp === 4_800_000_000)
    )
      isCrownEmoji = true;

    emoji = isCrownEmoji ? "👑👑" : emoji;
    content += emoji;
    if (isCrownEmoji) content = `**${content}**`;
  }

  return content;
};

export const createErrorEmbed = (error: Error) => {
  return {
    title: "⚠️ Scraper Error",
    description: `\`\`\`${error.message}\`\`\``,
    color: 0xff0000,
  };
};
