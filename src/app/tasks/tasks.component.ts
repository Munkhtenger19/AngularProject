import { Component } from '@angular/core';
import { Task, GroupService } from '../Group.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  chosenTask: Task | undefined;
  constructor(private groupService: GroupService) {
    this.tasks = this.groupService.getTasks();
  }
  onEditTask(task: any) {
    // Edit task logic here
    this.chosenTask = task;
    
    this.groupService.editTask(task);

  }

  onDeleteTask(task: any) {
    // Delete task logic here
    this.groupService.deleteTask(task);
  }
}
