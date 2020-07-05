import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpService } from '../../emp.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  valid = false;
  employee = { id: "", name: "", age: "", salary: "", profile: "" }
  show = true;
  constructor(private empSerivce: EmpService, private router: Router) { }
  ngOnInit(): void {
  }
  addEmployee(f: NgForm) {
    if (f.form.valid) {
      // alert("hello");
      this.empSerivce.addData(this.employee).subscribe((resp) => {
        console.log(resp);
        this.router.navigate(["home"])
      })
    }
  }
  toggle() {
    this.show = !this.show;
  }
}
