using BowlingAPI.Data;
using BowlingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IFBowlingReposityory _bowlingRepository;
        public BowlingLeagueController(IFBowlingReposityory temp) {
            _bowlingRepository = temp;
        }

        [HttpGet("Bowler")]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlerData = _bowlingRepository.Bowler.ToArray();
            return bowlerData;
        }

        [HttpGet("MarlinsSharks")]
        public IEnumerable<Bowler> MarlinsSharks()
        {
            var bowlerData = _bowlingRepository.Bowler.Where(x => (x.TeamId == 1) || (x.TeamId == 2)).ToArray();
            return bowlerData;
        }

        [HttpGet("Team")]
        public IEnumerable<Team> GetTeams()
        {
            var teamData = _bowlingRepository.Team.ToArray();
            return teamData;
        }

    }
}
