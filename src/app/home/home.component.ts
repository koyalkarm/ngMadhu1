import { EmpService } from '../emp.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public empData;
  modalRef: BsModalRef;
  selectedEmp;


  constructor(private empService: EmpService, private modalService: BsModalService) { }

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
  openModal(template: TemplateRef<any>, emp) {
    this.modalRef = this.modalService.show(template);
    console.log(emp);
    this.selectedEmp=emp;
  }
  confirm(id): void {
    this.empService.deleteData(id).subscribe((resp)=>{
console.log(resp);
this.modalRef.hide();
    })
    
  }
 
  decline(): void {
    this.modalRef.hide();
  }
}
