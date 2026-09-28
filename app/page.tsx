import PlayerSection from "../components/PlayerSection";
import { Player } from "../types/Player";
import { fetchPlayerData, getRosterPlayers } from "../lib/sleeper";
import { getRosterIds } from "../lib/roster";

export default async function Home() {
  const sleeperResponse = await fetchPlayerData();
  const playerData = sleeperResponse.data;
  const lastUpdated = sleeperResponse.lastUpdated;
  const rosterIds = await getRosterIds();
  console.log("Roster IDs:", rosterIds);
  const myRoster = getRosterPlayers(playerData, rosterIds);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-[#A3B18A]">
      <h1 className="text-4xl font-bold">Fantasy Football Dashboard</h1>
      <p className="absolute top-4 right-6 text-xs text-gray-600">
        Last Updated: {lastUpdated
        ? new Date(lastUpdated).toLocaleString()
        : "Unknown"}
      </p>
      <PlayerList myRoster={myRoster}/>
    </main>
  );
}

function PlayerList({ myRoster }: { myRoster: Player[] }) {

  return (
    <ul className="mt-4 text-sm text-gray-600 flex flex-row justify-center font-semibold">
      <PlayerSection position="QB" players={myRoster} />
      <PlayerSection position="RB" players={myRoster} />
      <PlayerSection position="WR" players={myRoster} />
      <PlayerSection position="TE" players={myRoster} />
      <PlayerSection position="DEF" players={myRoster} />
      <PlayerSection position="K" players={myRoster} />
    </ul>
  );
}
