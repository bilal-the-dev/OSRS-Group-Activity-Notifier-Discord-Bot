export interface customFetchOptions {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any[] | Record<any, any>;
  additionalHeaders?: Record<any, any>;
}

export type SkillMilestoneEntry = {
  Username: string;
  Date: string; // ISO 8601 date string
  Skill: string;
  Milestone: "XP"; // Since all values are "XP"
  Type: "Skill" | "Pvm"; // Based on data values
  Xp: number;
};

export type SkillMilestoneData = {
  data: SkillMilestoneEntry[];
};
