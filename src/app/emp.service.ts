import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
  addData(data){
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", data)
  }
  editData(id, data){
    return this.http.put("http://dummy.restapiexample.com/api/v1/update/" + id, data)
// return this.http.put(`/api/update/${id}`, data)
  }
  deleteData(id){
    return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
  }
  getEmp(id){
    console.log(id)
    return this.http.get(`/api/employee/${id}`)
  }
}
