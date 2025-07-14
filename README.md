# 🧙‍♂️ OSRS Group Activity Notifier — Discord Bot

This bot fetches **group achievements** from the [TempleOSRS API](https://templeosrs.com/api) and posts **milestone updates** (XP, EHP, boss kills) to your Discord server using a webhook embed.

It helps your clan or group stay updated on members’ progress — instantly and automatically.

## 📦 Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bilal-the-dev/OSRS-Group-Activity-Notifier-Discord-Bot osrsBot
cd osrsBot
```

### 2. Install Dependencies

```bash
npm install
```

## 📁 .env Configuration

Create a `.env` file in the root directory with the following values:

```env
NODE_ENV='production'                  # 'development'
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxx/your-webhook-id

TEMPLE_OSRS_API_BASE_URL='https://templeosrs.com/api'
GROUP_ID='4'                           # Your TempleOSRS group ID
```

### 🔑 Details:

- **`NODE_ENV`**
  If set to `'development'`, sends initial 25 activities on startup.

- **`DISCORD_WEBHOOK_URL`**
  Discord webhook URL where the bot will post activity embeds.

- **`TEMPLE_OSRS_API_BASE_URL`**
  TempleOSRS API endpoint (does not need to change).

- **`GROUP_ID`**
  The TempleOSRS group ID you want to track activities for.

## ▶️ Run the Bot

```bash
npm run start
```

## 🧠 Features

- 📢 Posts real-time OSRS group milestones to Discord
- 🧠 Detects and filters only **new activity** (no duplicates)
- 🎯 Supports:

  - XP milestones
  - EHP milestones
  - Boss kill milestones (PVM)

- ⏱ Discord timestamps using `<t:...:f>` for clean formatting
- ✅ Lightweight & simple to host

## 🛠 Built With

- TypeScript
- Node.js Fetch API
- Discord Webhooks
- TempleOSRS Public API
