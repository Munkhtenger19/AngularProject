import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  @Input() group: any;
  showTasks() {
    console.log('Show tasks for group:', this.group.name);
  }
}
