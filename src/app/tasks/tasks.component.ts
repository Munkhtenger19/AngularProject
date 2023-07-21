import { Component } from '@angular/core';
import { Task, GroupService } from '../Group.service';
import { MatDialog } from '@angular/material/dialog';
import { EdittaskdialogComponent } from '../edittaskdialog/edittaskdialog.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  chosenTask: Task | undefined;
  constructor(private groupService: GroupService, private dialog: MatDialog) {
    this.tasks = this.groupService.getTasks();
  }
  onEditTask(task: Task) {
    const dialogRef = this.dialog.open(EdittaskdialogComponent, {
      width: '400px',
      data: { task: task }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the task in your data source
      }
    });
  }

  onDeleteTask(task: any) {
    // Delete task logic here
    this.groupService.deleteTask(task);
  }
}
