import { Component, OnInit } from '@angular/core';
import { EmpService} from '../emp.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
empData;
  constructor(private empService: EmpService) { }

  ngOnInit(): void {
this.empService.getData().subscribe(Response){
  this.empData=Response;
}
  }
addEmpData(data){
  this.empService.addData(data).subscribe(resp){
    console.log("data added successfully")
  }
}
editEmpData(id, data){
  this.empService.editData(id, data).subscribe(resp){
    console.log("data added successfully")
  }
}
deleteEmpData(id){
  this.empService.deleteData(id).subscribe(resp){
    console.log("data added successfully")
  }
}
}
