import { Component, Injectable } from "@angular/core";
import { C } from "@angular/core/src/render3";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository"; 
import { Router } from "@angular/router";

@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
@Injectable()
export class LoginComponent{
    userName: string=''
    senha:string
    user:User
    constructor(private userRepositorie:UserRepository,
            private route:Router){

    }
    verificarLogarUser(){
        
        this.userRepositorie.getUserById(this.userName).subscribe({
            next:(value)=>{
                if(value.password==this.senha){
                    console.log("User Logado"+value.name)
                    this.user=value
                    alert("User Logado"+this.user.name)
                    this.setCookie("UserLogado",JSON.stringify(this.user),86400)
                    this.route.navigate(['todo-app'])
                }else{
                    alert("User Não encontrado")
                }
                
            }
        })
        
    }
    
    setCookie(nomeKey,value,expira){
        
            let d = new Date();
            d.setTime(d.getTime() + (expira * 1000));
        
            document.cookie = nomeKey + "=" + 
            value + 
            "; expires=" + d.toUTCString() 
        
    }
    
}