import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupService, Task } from '../Group.service';
@Component({
  selector: 'app-tasks-dialog',
  templateUrl: './tasks-dialog.component.html',
})
export class TasksDialogComponent {
  newTask: { priority?: string, dueDate?: Date, name: string, completed: boolean, group: number } = {
    name: '',
    priority: '',
    dueDate: undefined,
    completed: false,
    group: this.data.group.id
  };
  constructor(
    public dialogRef: MatDialogRef<TasksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private groupService: GroupService
  ) { }
  deleteTask(task: any) {
    this.data.group.tasks.splice(this.data.group.tasks.indexOf(task), 1);
  }
  onSave() {
    console.log('New task:', this.newTask);
{ // Add null check
      const task: Task = {
        name: this.newTask.name,
        priority: this.newTask.priority || '',
        dueDate: this.newTask.dueDate || undefined,
        completed: false,
        group: this.data.group.id
      };
      console.log(task);
      console.log(this.data.group.id);
      this.groupService.addTask(this.data.group.id, task);
      this.data.group.tasks.push(task);
      console.log('New task added:', task);
    
    }
  }
  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.groupService.updateTask(this.data.group.id, task);
  }
}