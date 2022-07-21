import { Rank } from "./rank.enum";
import { Suit } from "./suit.enum";

export interface Card {
    rank: Rank;
    suit: Suit;
}
