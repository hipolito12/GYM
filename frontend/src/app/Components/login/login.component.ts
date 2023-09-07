import { Component,OnInit } from '@angular/core';
import{LoginService} from "../../Services/login.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  implements OnInit {
user=
{
  dni:'',
  contrasena:''

}
 constructor(private loginService:LoginService) { }
ngOnInit() {
}
Ingresar() {
  this.loginService.Ingresar(this.user)
  .subscribe(
    res=>{console.log(res);/* localStorage.setItem('token',res.toString());*/ },
    err=>console.log(JSON.stringify(err))
  )
}

}
