import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface Group {
  id: number;
  name: string;
  tasks: Task[];
}

export interface Task {
  name: string;
  group: number;
  completed: boolean;
  dueDate?: Date;
  priority?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: Group[] = 
  [
    {
      id: 1,
      name: 'Group 1',
      tasks: [
        {
          name: 'Task 1',
          
          group: 1,
          completed: false,
          dueDate: new Date('2024-01-01')
        },
        {
          name: 'Task 2',
          
          group: 1,
          completed: true,
          priority: 'high'
        }
      ]
    },
    {
      id: 2,
      name: 'Group 2',
      tasks: [
        {
          name: 'Task 3',
          
          group: 2,
          completed: false,
          dueDate: new Date('2024-01-01')
        },
        {
          name: 'Task 4',
          
          group: 2,
          completed: false,
          priority: 'low'
        }
      ]
    }
  ];
  // JSON.parse(localStorage.getItem('group') || '[]');

  constructor() {
    this.groups = JSON.parse(localStorage.getItem('groups') || '[]');
  }

  getGroups(): Group[] {
    return this.groups;
  }

  addGroup(group: Group) {
    this.groups.push(group);
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }

  addTask(groupIndex: number, task: Task) {
    const groupX = this.groups.findIndex(group => group.id === groupIndex);
    this.groups[groupX].tasks.push(task);
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }
  getTasks(): Task[] {
    let tasks: Task[] = [];
    this.groups.forEach(group => {
      tasks = tasks.concat(group.tasks);
    });
    return tasks;
  }
  editTask(task: Task) {
    const index = this.groups.findIndex(group => group.id === task.group);
    const taskIndex = this.groups[index].tasks.findIndex(t => t.name === task.name);
    this.groups[index].tasks[taskIndex] = task;
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }
  deleteTask(task: Task) {
    const index = this.groups.findIndex(group => group.id === task.group);
    const taskIndex = this.groups[index].tasks.findIndex(t => t.name === task.name);
    this.groups[index].tasks.splice(taskIndex, 1);
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }
  updateTask(groupIndex: number, task: Task) {
    const index = this.groups[groupIndex].tasks.findIndex(t => t.name === task.name);
    this.groups[groupIndex].tasks[index] = task;
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }
}