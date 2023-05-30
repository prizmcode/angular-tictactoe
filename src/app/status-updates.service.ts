import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdatesService {
  messages: string[] = [];
  history: any[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  addHistory(squares: any[]) {
    this.history.push(squares);
  }
  
}

