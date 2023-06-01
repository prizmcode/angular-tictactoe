import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { StatusUpdatesService } from '../status-updates.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  constructor(public gameService: GameService, public statusService: StatusUpdatesService) {}
}
