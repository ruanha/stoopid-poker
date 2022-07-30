import { TestBed } from '@angular/core/testing';
import { Suit } from '../models/suit.enum';
import hands from './test-data/hands.data';

import { PokerService } from './poker.service';

const tk_1 = [
  { rank: 2, suit: Suit.Clubs },
  { rank: 4, suit: Suit.Clubs },
  { rank: 6, suit: Suit.Clubs },
  { rank: 6, suit: Suit.Clubs },
  { rank: 6, suit: Suit.Clubs },
];
  const tk_2 = [
    { rank: 2, suit: Suit.Clubs },
    { rank: 4, suit: Suit.Clubs },
    { rank: 6, suit: Suit.Clubs },
    { rank: 6, suit: Suit.Clubs },
    { rank: 6, suit: Suit.Clubs },
  ];
  
  describe('PokerService', () => {
  let service: PokerService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokerService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return the list of winners from a list of hands', () => {
    const hands = [tk_1, tk_2];
    expect(service.poker(hands).length).toEqual(2);
    expect(service.poker(hands)[0]).toEqual(tk_1);
    expect(service.poker(hands)[1]).toEqual(tk_2);
  });

  it('should return the hand with highest kicker when both have two pairs', () => {
    const two_pairs_1 = hands['two_pairs'];
    const two_pairs_2 = [
      { rank: 7, suit: Suit.Clubs },
      { rank: 7, suit: Suit.Clubs },
      { rank: 2, suit: Suit.Clubs },
      { rank: 2, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      ];
    
    expect(service.poker([two_pairs_1, two_pairs_2])).toEqual([two_pairs_2]);
  });

  it('should return the hand with the highest rank of pair, when compairing hands of one pair', () => {
    expect(service.poker([hands['one_pair'], hands['one_pair_highest']])).toEqual([hands['one_pair_highest']]);
  });
});

describe('PokerService helper function "compare', () => {
  let service: PokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokerService);
  });

  it('should return true if the new hand is greater', () => {

    const newHand = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.compare(newHand, [tk_1, tk_2]).length).toEqual(1); // the result array is length 1
    expect(service.compare(newHand, [tk_1, tk_2])[0]).toEqual(newHand); // the item in the array is the new hand
  });

  it('should return the same array if the new hand rank is less than the current winner', () => {
    const newHand = [
      { rank: 1, suit: Suit.Clubs },
      { rank: 2, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.compare(newHand, [tk_1, tk_2]).length).toEqual(2); // the result array is length 2
    expect(service.compare(newHand, [tk_1, tk_2])[0]).toEqual(tk_1); // the items in the array remain the same
    expect(service.compare(newHand, [tk_1, tk_2])[1]).toEqual(tk_2); // the items in the array remain the same
  });

  it('it should return the array concatinated with the new hand, if they are equal', () => {
    const newHand = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      ];
      expect(service.compare(newHand, [tk_1, tk_2]).length).toEqual(3); // the result array is length 3
      expect(service.compare(newHand, [tk_1, tk_2])[0]).toEqual(tk_1); // the items in the array remain the same
      expect(service.compare(newHand, [tk_1, tk_2])[1]).toEqual(tk_2); // the items in the array remain the same
      expect(service.compare(newHand, [tk_1, tk_2])[2]).toEqual(newHand); // the new hand is added to the array
  });

});