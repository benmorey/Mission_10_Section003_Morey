import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowlers';
import { Team } from '../types/Teams';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5165/api/BowlingLeague/MarlinsSharks');
      const f = await rsp.json();
      setBowlerData(f);
    };
    const fetchTeamData = async () => {
      const teamResponse = await fetch('http://localhost:5165/api/BowlingLeague/Team');
      const teams = await teamResponse.json();
      setTeamData(teams);
    };
    fetchBowlerData();
    fetchTeamData();
  }, []);

  const getTeamName = (teamId: any) => {
    const team = teamData.find((t) => t.teamId === teamId);
    return team ? team.teamName : "Unkown"
  };

  return (
    <>
      <br />
      <div className="row">
        <h4 className="text-center">Bowler Information:</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{getTeamName(b.teamId)}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
              <td>test</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default BowlerList;
