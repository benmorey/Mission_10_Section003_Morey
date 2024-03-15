using BowlingAPI.Models;

namespace BowlingAPI.Data
{
    public class EFBowlingRepository : IFBowlingReposityory
    {
        private BowlingLeagueContext _context;
        public EFBowlingRepository(BowlingLeagueContext temp) { _context = temp; }

        public IEnumerable<Bowler> Bowler => _context.Bowlers;
        public IEnumerable<Team> Team => _context.Teams;

    }
}
