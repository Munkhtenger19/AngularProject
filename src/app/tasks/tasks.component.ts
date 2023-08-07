import { Component } from '@angular/core';
import { Task, GroupService } from '../Group.service';
import { MatDialog } from '@angular/material/dialog';
import { EdittaskdialogComponent } from '../edittaskdialog/edittaskdialog.component';
import { Custom_datePipe } from '../_pipe/custom_date.pipe';
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
    console.log(task);
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
    console.log(task);
    this.groupService.deleteTask(task);
  }
}
