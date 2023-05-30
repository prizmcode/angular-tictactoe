import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { StatusUpdatesService } from '../status-updates.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(private gameService: GameService, public statusService: StatusUpdatesService) {}


}
