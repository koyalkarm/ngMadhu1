import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("");
  }
  addData(data){
    return this.http.post("url", data)
  }
  editData(id, data){
return this.http.post("url", data)
  }
  deleteData(id){
    return this.http.post("url", id)
  }
}
