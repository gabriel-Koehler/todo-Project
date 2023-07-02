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


    constructor(private userRepository:UserRepository){    }
    
    cadastrarUsuario(){
        let user=new User()
        user.id=this.id
        user.name=this.name
        user.password=this.password
        user.email=this.email
        console.log(user)
        this.userRepository.criarUser(user)
    }
}