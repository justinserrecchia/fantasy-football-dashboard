# Fantasy Football Dashboard

A personal fantasy football dashboard built with Next.js that displays players from my fantasy roster using live NFL player data.

## Features

- Displays fantasy roster players by position
- Fetches real player information from the Sleeper API
- Shows player team, position, experience, and injury status
- Links to team depth charts
- Stores fantasy roster player IDs in PostgreSQL
- Uses reusable React components for player cards and position sections

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- PostgreSQL
- Sleeper API
- Git / GitHub

## How It Works

The application stores the Sleeper IDs of players on my fantasy roster in PostgreSQL.

Next.js retrieves those IDs from the database and uses them to find player information from the Sleeper API.

The returned data is converted into the application's Player model and displayed through React components.

Basic data flow:

PostgreSQL  
→ Roster Player IDs  
→ Sleeper API  
→ Player Data  
→ React Components  
→ Fantasy Dashboard

## Project Structure

```text
app/
  page.tsx

components/
  PlayerCard.tsx
  PlayerSection.tsx
  abbrToTeam.tsx

lib/
  db.ts
  roster.ts
  sleeper.ts

types/
  Player.ts
```

## Running Locally

Install dependencies:

```bash
npm install
```

Create a `.env.local` file with your PostgreSQL connection information.

Example:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fantasy_dashboard
DB_USER=postgres
DB_PASSWORD=your_password
```

Start the development server:

```bash
npm run dev
```

Then visit:

```text
http://localhost:3000
```

## Future Improvements

- Weekly NFL matchups
- Fantasy statistics and projections
- Starting lineup selection
- Add/remove players through the dashboard
- Improved responsive design
- Player news and matchup information
- AI-assisted fantasy recommendations

## Status

This project is currently in active development.