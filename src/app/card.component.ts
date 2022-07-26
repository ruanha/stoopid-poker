import { Component, Input, OnInit } from '@angular/core';

/**
 * Card component
 * a card component with a simple API:
 * - `card.rank`: the card rank, a number between 2 and 14;
 * - `card.suit`: the card suit, a string of 'spades', 'hearts', 'diamonds' or 'clubs';
 */

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rank: number = 9;
  @Input() suit : string = 'hearts';

  suitColor = this.suit === 'spades' || this.suit === 'clubs' ? 'black' : 'red';

  suitMap: {[key: string]: string} = {
    clubs: '♣',
    diamonds: '♦',
    hearts: '♥',
    spades: '♠'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
