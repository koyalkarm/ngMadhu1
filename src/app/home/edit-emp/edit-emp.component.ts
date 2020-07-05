import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from 'src/app/emp.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  id:any;
  employee = {id:"", name: "madhu", age: "34", salary: "34343", profile: "" }
  constructor(private route: ActivatedRoute, private empService:EmpService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.id = JSON.stringify(data.id);
            console.log(this.id)
            this.employee.id=this.id;
            this.empService.getEmp(this.id).subscribe((resp)=>{
console.log(resp)
            })
    })
  }
editEmployee(f:NgForm){
  if(f.form.valid){
    console.log(this.employee);
    this.empService.editData(this.employee.id, this.employee).subscribe((resp)=>{
console.log(resp)
this.router.navigate(["home"])

    })
  }



}
}
