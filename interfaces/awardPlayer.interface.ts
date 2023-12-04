import { IPlayer } from ".";

export interface IAwardPlayer {
    _id?: string;
    name: ENameAwardPlayer;
    player: IPlayer;
}

export enum ENameAwardPlayer {
    BESTPlAYER = 'BESTPlAYER',
    GOALSCORER = 'GOALSCORER',
    STRIKER = 'STRIKER',
    MIDFIELDER = 'MIDFIELDER',
    DEFENDER = 'DEFENDER',
    GOALKEEPER = 'GOALKEEPER',
}
