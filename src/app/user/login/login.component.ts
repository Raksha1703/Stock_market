import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message : string ="";
  public username : string ="";
  public password : string ="";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.username, this.password)
    .subscribe((resp)=>{
      console.log('Succecfully Logging in');
      this.message = resp.msg;
    },(err) => {
      console.error('Error logging in',err);
      this.message = err.error.msg;
    });
  }
}
