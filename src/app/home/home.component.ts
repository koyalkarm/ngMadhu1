import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public empData;
  constructor(private empService: EmpService) { }

  ngOnInit(): void {
    this.empService.getData().subscribe((resp:any) => {
      this.empData = resp.data;
    }, (error) => {
      console.log(error);
    })
  }
  addEmpData(data) {
    this.empService.addData(data).subscribe((resp) => {
      console.log(resp);
    })
  }
  editEmpData(id, data) {
    this.empService.editData(id, data).subscribe((resp) => {
      console.log(resp);
    })
  }
  deleteEmpData(id) {
    this.empService.deleteData(id).subscribe((resp) => {
      console.log(resp);
    })
  }
  addNewEmp(){
    let data={}
    this.empService.addData(data).subscribe((resp) =>{
    })
  }
}
