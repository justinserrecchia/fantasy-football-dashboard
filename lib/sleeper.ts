export async function fetchPlayerData() {
  try {
    // fetch api
    const response = await fetch("https://api.sleeper.app/v1/players/nfl?active=true",
    // update daily
    { 
        next: { revalidate: 86400 }
      }
    );

    // error on accessing link
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const lastUpdated = response.headers.get("date");
    return {
      data,
      lastUpdated
    };

    // error on getting data
  } catch (error) {
    console.error("Error fetching player data:", error);

    return null;
  }
}

export function getPlayerById(players: any, sleeperId: string) {
    const player = players[sleeperId];
    return player ? {
        sleeperId: player.player_id,
        name: player.full_name,
        position: player.position,
        team: player.team,
        rookieYear: player.rookie_year,
        yearsExperience: player.years_exp,
        injuryStatus: player.status,
    } : null;
}

export function getRosterPlayers(players: any, roster: string[]) {
    return roster.map(sleeperId => getPlayerById(players, sleeperId)).filter(player => player !== null);
}