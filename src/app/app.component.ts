import { Component } from '@angular/core';
import { Card } from './core/models/card.model';
import { DealService } from './core/services/deal.service';
import { NamedHandService } from './core/services/named-hand.service';
import { PokerService } from './core/services/poker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public dealService: DealService,
    public pokerService: PokerService,
    public namedHandService: NamedHandService
  ) {}

  title = 'poker';
  hands: Card[][] = [];
  playerHand: Card[] = [];
  opponentHand: Card[] = [];
  dealt = false;
  bet: string = '';
  result: string = '';
  score = {you: 0, opponent: 0};

  deal() {
    this.hands = this.dealService.deal(2, 5);
    this.playerHand = this.hands[0];
    this.opponentHand = this.hands[1];
    this.dealt = true;
    this.bet = '';
  }

  action(action: string): void {
    this.bet = action;
    const winners = this.pokerService.poker(this.hands);
    
    if (winners.length > 1) {
      this.result = 'tie';
    }
    if (winners[0] === this.playerHand) {
      this.result = 'win';
    }
    if (winners[0] === this.opponentHand) {
      this.result = 'lose';
    }
    if (this.result === this.bet) {
      this.score.you += 1;
    } else {
      this.score.opponent += 1;
    }
    this.dealt = false;
  }

}
