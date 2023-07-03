import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    selector:'cadastr-app',
    templateUrl:'./cadastro.component.html',
    styleUrls:['./cadastro.component.css']
})
export class CadastroComponent {

    id:string
    name:string
    password:string
    email:string
    idRemover:string

    constructor(private userRepository:UserRepository){   
    
     }
    
    cadastrarUsuario(){
        let user=new User()
        user.id=this.id
        user.name=this.name
        user.password=this.password
        user.email=this.email
        this.userRepository.criarUser(user).subscribe((data:User)=>{
            this.id=''
            this.name=''
            this.password=''
            this.email=''
            console.log(data)
        })
    }
    removerUsuario(){
        this.userRepository.removerUsuario(this.idRemover).subscribe(()=>{
            console.log(this.idRemover)
        })
    }
}