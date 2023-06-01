import { Component } from '@angular/core';
import { StatusUpdatesService } from '../status-updates.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  constructor(public statusService: StatusUpdatesService) {}
}
