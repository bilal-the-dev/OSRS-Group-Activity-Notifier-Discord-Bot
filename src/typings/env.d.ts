declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "production" | "development";
      DISCORD_WEBHOOK_URL: string;
      TEMPLE_OSRS_API_BASE_URL: string;
      GROUP_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
