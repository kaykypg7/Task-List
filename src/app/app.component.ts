import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'inProgress' | 'done';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: Task[] = [
    { id: 1, title: 'Estudar Angular', status: 'todo' },
    { id: 2, title: 'Fazer exercícios', status: 'todo' }
  ];

  inProgress: Task[] = [
    { id: 3, title: 'Criar projeto', status: 'inProgress' }
  ];

  done: Task[] = [
    { id: 4, title: 'Setup do ambiente', status: 'done' }
  ];

  showForm = false;
  newTask = '';
  nextId = 5;

  addNewTask() {
    if (this.newTask.trim()) {
      this.todo.push({
        id: this.nextId++,
        title: this.newTask.trim(),
        status: 'todo'
      });
      this.newTask = '';
      this.showForm = false;
    }
  }

  moveRight(task: Task) {
    if (task.status === 'todo') {
      this.todo = this.todo.filter(t => t.id !== task.id);
      this.inProgress.push({ ...task, status: 'inProgress' });
    } else if (task.status === 'inProgress') {
      this.inProgress = this.inProgress.filter(t => t.id !== task.id);
      this.done.push({ ...task, status: 'done' });
    }
  }

  moveLeft(task: Task) {
    if (task.status === 'inProgress') {
      this.inProgress = this.inProgress.filter(t => t.id !== task.id);
      this.todo.push({ ...task, status: 'todo' });
    } else if (task.status === 'done') {
      this.done = this.done.filter(t => t.id !== task.id);
      this.inProgress.push({ ...task, status: 'inProgress' });
    }
  }

  deleteTask(task: Task) {
    this.done = this.done.filter(t => t.id !== task.id);
  }
}
