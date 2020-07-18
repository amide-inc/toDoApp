import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

  getTaskList():Observable<any> {
    return this.http.get('http://localhost:8080/api/task/');
  }
  addTask(data):Observable<any> {
    return this.http.post('http://localhost:8080/api/task/', data);
  }
  deleteTask(id):Observable<any> {
    return this.http.delete('http://localhost:8080/api/task/'+id)
  }
}
