import { Injectable } from "@angular/core";
import { b } from "@angular/core/src/render3";
import { AppComponent } from "src/app/app.component";

@Injectable()
export class AuthService {
    constructor(private appComponent:AppComponent){}
    logged:boolean=false
    
    async teste(): Promise<void> {
        let a=await this.appComponent.getCookie("UserLogado")
        console.log("cookie "+a)
        if(a==null){
            console.log(a)
            this.logged=false
        }else{
            this.logged=true
        }

    }
    login(){
        this.logged=true
    }
    logout(){
        this.logged=false
    }
    isAuthenticate(){
        this.teste()
        return this.logged
    }
}