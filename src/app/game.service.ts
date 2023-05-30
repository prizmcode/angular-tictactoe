import { Injectable } from '@angular/core';
import { StatusUpdatesService } from './status-updates.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private statusService: StatusUpdatesService) {}

  squares: string[] = Array(9).fill(null);
  currentMove: number = 0;
  xIsNext: boolean = true;
  winner: string = '';

  updateSquare(id: any) {

    // if this square has already been chosen, or there is already a winner
    if (this.squares[id] || this.winner) {
      return this.squares[id]
    } 
    
     // set value and assign who goes next
     if (this.xIsNext) {
      this.squares[id] = 'X';
    } else {
      this.squares[id] = 'O';
    }

    console.log(this.squares);

    // check for winner
    this.winner = this.calculateWinner(this.squares);
    console.log('winner' + this.winner);
    
   
    if (this.winner) {
      this.statusService.add('Winner: ' + this.winner);

      return this.squares[id];
    } else {
          // log move
      this.statusService.addHistory(this.squares);
      this.statusService.add('Next player: ' + (this.xIsNext ? 'O' : 'X'));
    }
    

   

    // iterate move
    this.currentMove = this.currentMove + 1;

    // toggle who is next
    this.xIsNext = this.currentMove % 2 === 0;

    // return the value for the square
    return this.squares[id];
  }

  calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpToMove(move: any[]) {
    this.squares = move;
    console.log('here');
  }

}
