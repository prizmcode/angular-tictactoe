import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() id = 0;
  
 
  constructor(public gameService: GameService) {}
  
  handleMove(element: any) {
    this.gameService.updateSquare(this.id);
  }
  
}
