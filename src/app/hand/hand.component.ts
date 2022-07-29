import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../core/models/card.model';
import { CardTrigonometryService } from '../core/services/display/card-trigonometry.service';
import { RankToCharService } from '../core/services/rank-to-char.service';
import { SuitToStringService } from '../core/services/suit-to-string.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() hand!: Card[];
  @Input() backside = false;

  constructor(
    public suitToStringService: SuitToStringService,
    public rankToCharService: RankToCharService,
    public cardTrigonometryService: CardTrigonometryService) { }


  ngOnInit(): void {
  }

}
