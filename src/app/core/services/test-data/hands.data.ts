import Hand from "../../models/hand.model";
import { Suit } from "../../models/suit.enum";

let sf = [
    { rank: 2, suit: Suit.Clubs },
    { rank: 3, suit: Suit.Clubs },
    { rank: 4, suit: Suit.Clubs },
    { rank: 5, suit: Suit.Clubs },
    { rank: 6, suit: Suit.Clubs },
  ]; // straight flush
let fk = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Diamonds },
    { rank: 4, suit: Suit.Spades },
    { rank: 4, suit: Suit.Clubs },
    { rank: 4, suit: Suit.Clubs },
] // four of a kind
const fh = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Diamonds },
    { rank: 4, suit: Suit.Spades },
    { rank: 4, suit: Suit.Clubs },
    { rank: 2, suit: Suit.Clubs },
]; // full house
const f = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
]; // flush
const s = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 6, suit: Suit.Hearts },
]; // straight
const sl = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 14, suit: Suit.Hearts },
]; // straight ace low
const tk = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 6, suit: Suit.Hearts },
] // three of a kind
const tp = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 2, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
] // two pair
const op = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
] // one pair
const hc = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
] // highest card


const testData = {
    straight_flush: sf,
    four_of_a_kind: fk,
    full_house: fh,
    flush: f,
    straight: s,
    straight_low: sl,
    three_of_a_kind: tk,
    two_pairs: tp,
    one_pair: op,
    high_card: hc
} as { [key: string]: Hand };
export default testData;