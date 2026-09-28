import abbrToTeam from "../components/abbrToTeam";

export default function PlayerCard({sleeperId, name, position, team, yearsExperience, injuryStatus, teamDepthChart }: Player) {

  // Defense
  if (position == "DEF") {
    return (
      <div className="bg-white shadow-md rounded-sm p-4 m-2 w-40 h-23 flex flex-col">
        <h2 className="mt-auto text-sm font-bold text-center">{abbrToTeam(team)}</h2>
        <p className="text-gray-600 text-xs text-center">{position}</p>
        <a href={`https://www.espn.com/nfl/team/depth/_/name/${team}/${abbrToTeam(team)}`} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline text-xs">
          Team Depth Chart
        </a>
      </div>
    );
  }

  // Rookie
  if (yearsExperience == 0) {
      return (
        <div className="bg-white shadow-md rounded-sm p-4 m-2 w-40 h-40 flex flex-col">
          <h2 className="mt-auto text-sm font-bold text-center">{name}</h2>
          <div className="flex justify-between px-4">
            <span className="text-gray-600 text-xs">{team}</span>
            <span className="text-gray-600 text-xs">{position}</span>
          </div>  
          <br />
          <p className="text-gray-600 text-xs">Rookie Year</p>
          <p className="text-gray-600 text-xs">Injury Status: {injuryStatus}</p>
          <a href={`https://www.espn.com/nfl/team/depth/_/name/${team}/${abbrToTeam(team)}`} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline text-xs">
            Team Depth Chart
          </a>
          <a href={'https://x.com/search?q='+ name + '(from:AdamSchefter OR from:RapSheet OR from:TomPelissero OR from:MikeGarafolo) since:2026-09-20&f=live'} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline text-xs">
            Recent Reports
          </a>
        </div>    
      );
    }

  // Everything else
  return (
      <div className="bg-white shadow-md rounded-sm p-4 m-2 w-40 h-40 flex flex-col">
      <h2 className="mt-auto text-sm font-bold text-center">{name}</h2>
      <div className="flex justify-between px-4">
        <span className="text-gray-600 text-xs">{team}</span>
        <span className="text-gray-600 text-xs">{position}</span>
      </div>
      <br />
      <p className="text-gray-600 text-xs">{yearsExperience+1}{numEnd(yearsExperience+1)} Year in League</p>
      <p className="text-gray-600 text-xs">Injury Status: {injuryStatus}</p>
      <a href={`https://www.espn.com/nfl/team/depth/_/name/${team}/${abbrToTeam(team)}`} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline text-xs">
        Team Depth Chart
      </a>
      <a href={'https://x.com/search?q='+ name + '(from:AdamSchefter OR from:RapSheet OR from:TomPelissero OR from:MikeGarafolo) since:2026-09-20&f=live'} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline text-xs">
        Recent Reports
      </a>
    </div>    
  );
}

function numEnd(yearsExperience: number) {
  if (yearsExperience % 10 === 1 && yearsExperience % 100 !== 11) {
    return "st";
  } else if (yearsExperience % 10 === 2 && yearsExperience % 100 !== 12) {
    return "nd";
  } else if (yearsExperience % 10 === 3 && yearsExperience % 100 !== 13) {
    return "rd";
  } else {
    return "th";
  }
}