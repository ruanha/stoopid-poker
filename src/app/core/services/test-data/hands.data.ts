import Hand from "../../models/hand.model";
import { Rank } from "../../models/rank.enum";
import { Suit } from "../../models/suit.enum";

let sf = [
    { rank: Rank.Two, suit: Suit.Clubs },
    { rank: Rank.Three, suit: Suit.Clubs },
    { rank: Rank.Four, suit: Suit.Clubs },
    { rank: Rank.Five, suit: Suit.Clubs },
    { rank: Rank.Six, suit: Suit.Clubs },
  ]; // straight flush
let fk = [
    { rank: Rank.Two, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Diamonds },
    { rank: Rank.Four, suit: Suit.Spades },
    { rank: Rank.Four, suit: Suit.Clubs },
    { rank: Rank.Four, suit: Suit.Clubs },
] // four of a kind
const fh = [
    { rank: Rank.Two, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Diamonds },
    { rank: Rank.Four, suit: Suit.Spades },
    { rank: Rank.Four, suit: Suit.Clubs },
    { rank: Rank.Two, suit: Suit.Clubs },
]; // full house
const f = [
    { rank: Rank.Two, suit: Suit.Hearts },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Seven, suit: Suit.Hearts },
]; // flush
const s = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Five, suit: Suit.Hearts },
    { rank: Rank.Six, suit: Suit.Hearts },
]; // straight
const sl = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Five, suit: Suit.Hearts },
    { rank: Rank.Ace, suit: Suit.Hearts },
]; // straight ace low
const tk = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Six, suit: Suit.Hearts },
] // three of a kind
const tp = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Two, suit: Suit.Hearts },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Seven, suit: Suit.Hearts },
    { rank: Rank.Seven, suit: Suit.Hearts },
] // two pair
const op = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Five, suit: Suit.Hearts },
    { rank: Rank.Five, suit: Suit.Hearts },
] // one pair
const hc = [
    { rank: Rank.Two, suit: Suit.Diamonds },
    { rank: Rank.Three, suit: Suit.Hearts },
    { rank: Rank.Four, suit: Suit.Hearts },
    { rank: Rank.Five, suit: Suit.Hearts },
    { rank: Rank.Seven, suit: Suit.Hearts },
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