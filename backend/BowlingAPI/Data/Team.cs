﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BowlingAPI.Models;

public partial class Team
{
    [Key]
    [Required]
    public int TeamId { get; set; }
    [Required]
    public string TeamName { get; set; } = null!;

    public int? CaptainId { get; set; }

    public virtual ICollection<Bowler> Bowlers { get; set; } = new List<Bowler>();

    public virtual ICollection<TourneyMatch> TourneyMatchEvenLaneTeams { get; set; } = new List<TourneyMatch>();

    public virtual ICollection<TourneyMatch> TourneyMatchOddLaneTeams { get; set; } = new List<TourneyMatch>();
}
