interface ITeam {
    id: number;
    name: string;
    shortName: string;
    crest: string;
}

interface IScore {
    home: number | null;
    away: number | null;
}

interface IMath {
    id: number;
    utcDate: string;
    status: string;
    homeTeam: ITeam;
    awayTeam: ITeam;
    score: IScore;

}