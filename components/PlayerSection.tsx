import PlayerCard from "./PlayerCard";

export default function PlayerSection({ position, players }: 
  { position: string, 
    players: Player[] }) {

  return (
    <li> {position}: <br /> {
      players.filter(player => player.position === position).map((player, index) => (
        <div className="ml-10" key={index}><PlayerCard name={player.name} position={player.position} team={player.team} rookieYear={player.rookieYear} yearsExperience={player.yearsExperience} injuryStatus={player.injuryStatus} /><br /></div>
      ))
    }</li>
  )
}