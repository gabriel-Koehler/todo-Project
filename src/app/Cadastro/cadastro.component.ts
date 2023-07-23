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
    idUpdate:string
    nameUpdate:string
    passwordUpdate:string
    emailUpdate:string
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
           const user=this.userRepository.getUserById(this.idRemover).subscribe({
            next: (value)=>{
              return value
            }
          })     
        this.userRepository.removerUser(user).subscribe((data)=>{
            console.log("realizada com sucesso")
            console.log(data)
        })
        
    }
    updateUsuario(){
        const user=new User()
        user.id=this.idUpdate
        user.email=this.emailUpdate
        user.password=this.passwordUpdate
        user.name=this.nameUpdate
        this.userRepository.updateUser(user).subscribe({
            next:()=>{
                console.log('deu certo')
            },
            error:(error)=>{
                console.log(error)
            }
        })
    }
}