import { Component,Injectable,OnInit} from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthGuardService } from 'src/services/auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent{
  rotaTdApp:boolean=false
  rotaAddCategoria:boolean=true
  
  private userId:string ="diogo.defate"
  private users:User[]=[]
  private user:User

  constructor(
    private userRepository:UserRepository
    ){}
  ngOnInit(){
        this.userRepository.getUserById(this.userId)
      .subscribe({
        next: (value)=>{
          this.user=value
          console.log(this.user)
        }
      })
        this.userRepository.getUsers()
      .subscribe({
        next: (value)=>{
          console.log(value)
          this.users=value
          console.log(this.users)
          
        }
      })  
  }
 
  rotaAdicionaCategoria():void{
    this.rotaTdApp=true
    this.rotaAddCategoria=false
  }
  rotaTodoApp():void{
    this.rotaTdApp=false
    this.rotaAddCategoria=true
  }
  
  getCookie(k) {
    console.log(document.cookie)
    let cookies = " " + document.cookie;
    console.log(cookies)
    let key = " " + k + "=";
    console.log(key)
    let start = cookies.indexOf(key);
    console.log(start)

    if (start === -1) return null;

    let pos = start + key.length;
    console.log(pos)
    let last = cookies.indexOf(";", pos);
    console.log(last)
    if (last !== -1) return cookies.substring(pos, last);

    return cookies.substring(pos);
}
}


