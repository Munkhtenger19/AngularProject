import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { GroupService, Group, Task } from '../Group.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksDialogComponent } from '../tasks-dialog/tasks-dialog.component';
import { CalendarView, CalendarEvent } from 'angular-calendar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
// export class HomeComponent {
//   // group1 = { name: 'Group 1', completed: 5, total: 10 };
//   // group2 = { name: 'Group 2', completed: 3, total: 7 };
//   // group3 = { name: 'Group 3', completed: 2, total: 5 };

//   // constructor(private dialog: MatDialog) {}

//   // showTasks() {
//   //   const dialogRef = this.dialog.open(TasklistComponent, {
//   //     width: '500px',
//   //     data: { /* pass the selected group data to the task list component */ }
//   //   });
//   // }
//   groups: Group[] = [];
//   newTask: Task = {
//     name: '',
//     description: '',
//     group: '',
//     completed: false
//   };

//   constructor(private dialog: MatDialog, private groupService: GroupService) {
//     this.groups = this.groupService.getGroups();
//   }

//   addTask(groupIndex: number) {
//     const dialogRef = this.dialog.open(TasklistComponent, {
//       width: '400px',
//       data: { groupIndex }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         const newTask: Task = {
//           name: result.name,
//           description: result.description,
//           group: this.groups[result.groupIndex].name,
//           completed: false
//         };
//         this.groupService.addTask(result.groupIndex, newTask);
//         this.groups = this.groupService.getGroups();
//       }
//     });
//   }

//   onSubmit() {
//     this.groupService.addTask(this.groups.findIndex(group => group.name === this.newTask.group), this.newTask);
//     this.newTask = {
//       name: '',
//       description: '',
//       group: '',
//       completed: false
//     };
//   }
// }
// export class HomeComponent implements OnInit {
//   groups: Group[] = [];
//   newTask: Task = {
//     name: '',
//     description: '',
//     group: '',
//     completed: false
//   };
//   newGroup: Group = { // Add this line
//     name: '',
//     tasks: []
//   };

//   constructor(private groupService: GroupService) {}

//   ngOnInit(): void {
//     this.groups = this.groupService.getGroups();
//   }

//   onSelectGroup(group: Group) {
//     this.selectedGroup = group;
//   }

//   onSubmit() {
//     this.groupService.addGroup(this.newGroup);
//     this.newGroup = { // Add this line
//       name: '',
//       tasks: []
//     };
//   }

//   onSubmitTask() {
//     const groupIndex = this.groups.findIndex(g => g.name === this.selectedGroup?.name);
//     this.groupService.addTask(groupIndex, this.newTask);
//     this.newTask = {
//       name: '',
//       description: '',
//       group: '',
//       completed: false
//     };
//   }

//   addTask(groupIndex: number) {
//     this.selectedGroup?.tasks.push({
//       name: '',
//       description: '',
//       group: this.selectedGroup.name,
//       completed: false
//     });
//   }
// }
export class HomeComponent implements OnInit {
  groups: Group[] = [];
  selectedGroup: Group | null = null;
  newTask: Task = {
    name: '',
    group: 0,
    completed: false,
  };
  newGroup: Group = {
    id: 0,
    name: '',
    tasks: [],
  };

  constructor(private groupService: GroupService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

  onSelectGroup(group: Group) {
    this.selectedGroup = group;
  }

  onSubmit() {
    this.groupService.addGroup(this.newGroup);
    this.newGroup = {
      id: 0,
      name: '',
      tasks: [],
    };
  }

  onSubmitTask() {
    const groupIndex = this.groups.findIndex(
      (g) => g.name === this.selectedGroup?.name
    );
    this.groupService.addTask(groupIndex, this.newTask);
    this.newTask = {
      name: '',
      group: 0 ,
      completed: false,
    };
  }

  addTask(groupIndex: number) {
    this.selectedGroup?.tasks.push({
      name: '',
      group: this.selectedGroup.id,
      completed: false,
    });
  }
  handleClick() {
    console.log('Clicked');
  }
  getCompletedTasks(group: Group): number {
    return group.tasks.filter((task) => task.completed).length;
  }
  openDialog(group: any) {
    const dialogRef = this.dialog.open(TasksDialogComponent, {
      width: '700px',
      height: '700px',
      data: { group: group }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // onOpenModal(group: Group) {
  //   this.selectedGroup = group;
  //   if (this.tasksModal) {
  //     this.tasksModal.nativeElement.style.display = 'none';
  //   }
  // }
  // onCloseModal() {
  //   this.tasksModal.nativeElement.style.display = 'block';
  // }
}
