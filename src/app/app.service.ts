import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
    id?: number;        // se quiser guardar id do banco
    title: string;
    status: 'todo' | 'inProgress' | 'done';
}

@Injectable({
    providedIn: 'root',
})
export class TarefasService {
    private apiUrl = 'http://localhost:3000/tarefas';  // URL do seu backend

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
