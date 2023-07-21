import { Component, Inject,Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  @Input() group: any;
  tasks = [
    { name: 'Task 1', description: 'Do something', completed: false },
    { name: 'Task 2', description: 'Do something else', completed: true },
    { name: 'Task 3', description: 'Do something more', completed: false }
  ];

  constructor(public dialogRef: MatDialogRef<TasklistComponent>) {}

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  close() {
    this.dialogRef.close();
  }
}

