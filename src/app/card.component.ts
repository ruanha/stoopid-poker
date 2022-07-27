import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Suit } from './core/models/suit.enum';
import { RankDisplayService } from './core/services/rank-display.service';

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

  @Input() rank!: number | string;
  @Input() suit! : string;

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

  constructor(
    public rankDisplayService: RankDisplayService) { }

  ngOnInit(): void {
    console.log(this.rank, this.suit)
    if (typeof this.rank === 'number') {
      [this.col1, this.col2, this.col3] = this.rankDisplayService.getRankDisplay(this.rank);
    }
    console.log(this.col1, this.col2, this.col3)
  }
}
