import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './service/task-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form:FormGroup;
  tasks;
  constructor(
    private taskService: TaskServiceService,
    private fb:FormBuilder
    ) {
      this.form = this.fb.group(
        {
          title: ['', Validators.required],
          description: ['', Validators.required]
        }
      )
    }

  ngOnInit(): void {
    this.getTask();
  }
  
  

  getTask() {
    this.taskService.getTaskList()
        .subscribe(res => {
          console.log(res);
          if(res.success){
            this.tasks = res.result

          }
        });
  }
  formSubmit() {
    var data = {
      title: this.form.get('title').value,
      description : this.form.get('description').value
    }
    this.taskService.addTask(data)
        .subscribe(res => {
          if(res.success) {
            this.getTask()
          }else {
            alert("somthing went wrong");
          }
        })
  }
  deleteTask(id) {
    this.taskService.deleteTask(id)
        .subscribe(res => {
          if(res.success) {
            this.getTask();
          }else{
            alert("somthing went wrong")
          }
        })
  }
}
