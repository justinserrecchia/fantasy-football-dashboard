import PlayerSection from "../components/PlayerSection";
import { players } from "../data/players";
import { Player } from "../types/Player";
import { fetchPlayerData, getRosterPlayers } from "../lib/sleeper";

export default async function Home() {
  const playerData = await fetchPlayerData();
  const myRoster = getRosterPlayers(playerData, players.map(player => player.sleeperId));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Fantasy Football Dashboard</h1>
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
