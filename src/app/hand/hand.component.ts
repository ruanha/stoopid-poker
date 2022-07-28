import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../core/models/card.model';
import { RankToCharService } from '../core/services/rank-to-char.service';
import { SuitToStringService } from '../core/services/suit-to-string.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() hand!: Card[];

  constructor(
    public suitToStringService: SuitToStringService,
    public rankToCharService: RankToCharService) { }


  ngOnInit(): void {
  }

  getRotation(index: number): number {
    const relativePosition = index - Math.floor(this.hand.length / 2);
    
    if (relativePosition === 0) {
      return 0;
    }
    const theta = Math.atan( 111 / (172 - 150))
    return (180 - 90 - (theta * 180 / Math.PI)) * relativePosition;
  }

  getTranslation(index: number) {
    const relativePosition = index - Math.floor(this.hand.length / 2);
    return relativePosition * (-150);
  }

}
