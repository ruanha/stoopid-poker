import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

/**
 * Card component
 * a card component with a simple API:
 * - `card.rank`: the card rank, a number between 2 and 14;
 * - `card.suit`: the card suit, a string of 'spades', 'hearts', 'diamonds' or 'clubs';
 */

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rank!: number;
  @Input() suit : string = 'hearts';

  suitColor = this.suit === 'spades' || this.suit === 'clubs' ? 'black' : 'red';
  col1 = 0;
  col2 = 0;
  col3 = 0;

  suitMap: {[key: string]: string} = {
    clubs: '♣',
    diamonds: '♦',
    hearts: '♥',
    spades: '♠'
  };

  constructor() { }

  ngOnInit(): void {
    if (this.rank < 4) {
      this.col2 = this.rank;
    }
    if ((this.rank > 3 && this.rank < 8) || this.rank === 9) {
      this.col2 = this.rank % 2;
      this.col1 = this.col3 = (this.rank - this.col2) / 2;
    }
    if (this.rank === 8) {
      this.col1 = this.col3 = 3;
      this.col2 = 2;
    }
    if (this.rank === 10) {
      this.col1 = this.col3 = 4;
      this.col2 = 2;
    }
  }
}
