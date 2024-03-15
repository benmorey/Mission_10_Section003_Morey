using BowlingAPI.Models;

namespace BowlingAPI.Data
{
    public interface IFBowlingReposityory
    {
        IEnumerable<Bowler> Bowler { get; }
        IEnumerable<Team> Team { get; }
    }
}
