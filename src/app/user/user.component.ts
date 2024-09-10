import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../shared/services/rest-api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
onDeleteUser() {
throw new Error('Method not implemented.');
}
  users:any  = {};
  constructor(private _restAPI:RestApiService){}
  ngOnInit(){
    this.getUser();
  }
  getUser(){
    this._restAPI.getData("user").subscribe(res=>{
      console.log(res);
      this.users = res;
      console.log(this.users)
    });
  }
  doDeleteUser(id: any){
    console.log(id);
    this._restAPI.deleteData("users/",id).subscribe(res=>{
      console.log(res);
    });
    
  }
}
