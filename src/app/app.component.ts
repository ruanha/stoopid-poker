import { Component } from '@angular/core';
import { DealService } from './core/services/deal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dealService: DealService) {}
  title = 'poker';
  hands = this.dealService.deal(2, 5);
}
