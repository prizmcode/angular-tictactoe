import { Component } from '@angular/core';
import { StatusUpdatesService } from '../status-updates.service';
import { GameService } from '../game.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  constructor(public statusService: StatusUpdatesService, public gameService: GameService) {}
}
