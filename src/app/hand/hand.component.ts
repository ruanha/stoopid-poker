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

}
