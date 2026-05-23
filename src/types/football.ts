export interface ITeam {
    id: number;
    name: string;
    shortName: string;
    crest: string;
}


export type Winner = "DRAW" | "HOME" | "AWAY" | null;
export type Duration = "REGULAR" | "EXTRA_TIME" | "PENALTY";
export type MatchStatus =  "TIMED" | "SCHEDULED" | "IN_PLAY" | "FINISHED" | "POSTPONED";

export interface ResponseMatches {
    filters: unknown ;
    resultSet: unknown;
    matches:IMatch[];
}

export interface Time {
   home: number | null ;
   away: number | null ;
}


export interface IScore {
    winner: Winner;
    duration: Duration;
    halfTime:Time;
    fullTime:Time;
    
}

export interface IMatch {
    id: number;
    utcDate: string;
    status: MatchStatus;
    homeTeam: ITeam;
    awayTeam: ITeam;
    score: IScore;
}

export interface IStanding {
    position: number;
    team: ITeam;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}



