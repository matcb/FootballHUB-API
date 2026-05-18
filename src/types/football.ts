export interface ITeam {
    id: number;
    name: string;
    shortName: string;
    crest: string;
}

export interface IScore {
    home: number | null;
    away: number | null;
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

export type MatchStatus =  "TIMED" | "SCHEDULED" | "IN_PLAY" | "FINISHED" | "POSTPONED";


