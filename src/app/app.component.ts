import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importando o CommonModule
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Task {
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],  // Adicionando CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todo: Task[] = [
    { title: 'Planejar estrutura do site' },
    { title: 'Definir paleta de cores' },
    { title: 'Escrever conteúdo inicial' }
  ];

  inProgress: Task[] = [
    { title: 'Desenvolver layout responsivo' },
    { title: 'Configurar servidor' }
  ];

  done: Task[] = [
    { title: 'Instalar ferramentas de desenvolvimento' },
    { title: 'Criar repositório no GitHub' }
  ];

  isAddTaskFormVisible = false;
  newTaskTitle = '';

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showAddTaskForm() {
    this.isAddTaskFormVisible = true;
  }

  hideAddTaskForm() {
    this.isAddTaskFormVisible = false;
    this.newTaskTitle = ''; // Reseta o campo de input
  }

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      this.todo.push({ title: this.newTaskTitle });
      this.hideAddTaskForm(); // Esconde o formulário após adicionar
    }
  }

  moveTaskToInProgress(task: Task) {
    this.todo = this.todo.filter(t => t !== task); // Remove da lista "To Do"
    this.inProgress.push(task); // Adiciona à lista "In Progress"
  }

  moveTaskToDone(task: Task) {
    this.inProgress = this.inProgress.filter(t => t !== task); // Remove da lista "In Progress"
    this.done.push(task); // Adiciona à lista "Done"
  }
  deleteTask(task: Task) {
    const index = this.done.indexOf(task);
    if (index > -1) {
      this.done.splice(index, 1); // Remove a tarefa da lista "Done"
    }
  }
}
