import { Component, Input, OnInit } from '@angular/core';
import { RankDisplayService } from './core/services/display/rank-display.service';

/**
 * Card component
 * a card component with a simple API:
 * - `card.rank`: the card rank, a number between 2 and 14;
 * - `card.suit`: the card suit, a string of 'spades', 'hearts', 'diamonds' or 'clubs';
 */

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rank!: number | string;
  @Input() suit! : string;
  @Input() backside = false;

  suitColor: string = "";
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
    if (typeof this.rank === 'number') {
      [this.col1, this.col2, this.col3] = this.rankDisplayService.getRankDisplay(this.rank);
    }
    this.suitColor = this.suit === 'spades' || this.suit === 'clubs' ? 'black' : 'red';
  }
}
