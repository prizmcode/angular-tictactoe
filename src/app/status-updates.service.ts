import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdatesService {
  messages: string[] = [];
  history: any[] = [];
  xIsNext: any[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
    this.history = [];
  }

  // log squares and player
  addHistory(squares: string[], xIsNext: boolean) {
    let hx: string[] = Array.from(squares);
    this.history.push(hx);
    this.xIsNext.push(xIsNext);

  }
  
}

