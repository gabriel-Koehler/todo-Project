import { Component,Injectable,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent{
  rotaTdApp:boolean=false
  rotaAddCategoria:boolean=true
  
  private userId:string ="diogo.defante"
  private users:User[]=[]
  private user:User

  constructor(
    private userRepository:UserRepository
    ){
      userRepository.getUsers()
      .subscribe({
        next: (value)=>{
          console.log(value)
          this.users=value
          console.log(this.users)
          this.user=this.getUsuarioLogado()
          console.log(this.user)
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
  
  hasCardPermission(permission:string):boolean{
    return this.user.cardPermissions.some((cardPermission)=>{
      return cardPermission == permission
    })
  }
  hasPropertyPermission(permission:string):boolean{
    return this.user.propertiesPermissions.some((propertiePermission)=>{
      return propertiePermission === permission
    })
  }
  private getUsuarioLogado():User{
    return this.users.find((user)=>{
      return user.id===this.userId
    })
  }
}


