import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username:string = "";
  public password:string = "";
  public message:string = "";

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.username, this.password)
    .subscribe((resp) => 
    { console.log('Successfully Register');
      this.message = resp.msg;
      this.router.navigate(['login']);
    },(err) => 
    { console.error('Error Registering', err)
      this.message = err.error.msg;      
    });
  }
}
